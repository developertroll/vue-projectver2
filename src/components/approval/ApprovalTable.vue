<template lang="">
  <el-table :data="tableData">
    <el-table-column type="index" />
    <el-table-column prop="type" label="종류">
      <template #default="scope">
        {{ translateType[scope.row.type] }}
      </template>
    </el-table-column>
    <el-table-column prop="writer" label="요청자" />
    <el-table-column prop="update" label="요청일" />
    <el-table-column prop="status" label="상태" />
    <el-table-column label="상세">
      <template #default="scope">
        <dialogSlot :title="dialogTitle">
          <template #default>
            <showProject
              :projectIndex="getParentProject(scope.row.referenceIndex)"
              :isSaved="true"
              v-if="scope.row.type === 'project'"
            />
            <generalDescription
              :parentLabel="translateWorkColumn"
              :parentData="getParentWork(scope.row.referenceIndex)"
              v-else-if="scope.row.type === 'work'"
            />
          </template>
        </dialogSlot>
      </template>
    </el-table-column>
    <el-table-column label="작업" v-if="parentStatus === '결재요청'">
      <template #default="scope">
        <div>
          <el-button type="success" @click="approve(scope.row.referenceIndex)"
            >승인</el-button
          >
          <el-button type="danger" @click="reject(scope.row.referenceIndex)"
            >반려</el-button
          >
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import dialogSlot from "../common/dialogSlot.vue";
import { Approval } from "../composables/Approval";
import showProject from "../common/showProject.vue";
import { Member } from "../composables/Member";
import { Work } from "../composables/Work";
import generalDescription from "../common/generalDescription.vue";
export default {
  name: "ApprovalTable",
  components: {
    dialogSlot,
    showProject,
    generalDescription,
  },
  props: {
    parentStatus: {
      type: String,
      default: "결재요청",
    },
  },
  computed: {
    approvalData() {
      return Approval.callApprovalList(this.parentStatus);
    },
  },
  data() {
    return {
      tableData: [],
      dialogTitle: "상세",
      translateType: {
        project: "프로젝트",
        work: "업무",
        member: "멤버",
        plan: "일정",
      },
      translateWorkColumn: {
        member: "작성자",
        master: "담당자",
        type: "분야",
        deadline: "마감일",
        update: "갱신일",
        status: "상태",
        detail: "업무",
        desc: "설명",
        etc: "비고",
      },
    };
  },
  methods: {
    tableInit() {
      this.approvalData.forEach((item) => {
        this.tableData.push({
          type: item.parentType,
          writer: !isNaN(item.writer)
            ? Member.findMemberByIndex(item.writer).name
            : item.writer,
          update: item.update,
          status: item.status,
          referenceIndex: item.index,
        });
      });
    },
    getParentProject(index) {
      return Approval.findparentProjectIndexByIndex(index);
    },
    approve(index) {
      Approval.finishApproval(index);
      this.$forceUpdate;
    },
    reject(index) {
      Approval.rejectApproval(index);
    },
    getParentWork(index) {
      try {
        const targetIndex = this.getParentProject(index);
        const target = Work.getWorkByIndex(targetIndex);
        const targetApproval = Approval.findApprovalByIndex(index);
        Reflect.deleteProperty(target, "index");
        Reflect.deleteProperty(target, "project");
        const result = {
          ...target,
          desc: targetApproval.desc,
          etc: targetApproval.etc,
        };
        return result;
        // console.log(index);
        // index는 삭제를 위해서 필요한 값으로, 삭제 후에는 필요없음
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.tableInit();
  },
  watch: {
    approvalData: {
      deep: true,
      handler() {
        this.tableData = [];
        this.tableInit();
      },
    },
  },
};
</script>
<style lang=""></style>
