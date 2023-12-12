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
            />
          </template>
        </dialogSlot>
      </template>
    </el-table-column>
    <el-table-column label="작업">
      <template #default="scope">
        <div v-if="scope.row.status === '결재요청'">
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
export default {
  name: "ApprovalTable",
  components: {
    dialogSlot,
    showProject,
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
    };
  },
  methods: {
    tableInit() {
      this.approvalData.forEach((item) => {
        this.tableData.push({
          type: item.parentType,
          writer: Member.findMemberByIndex(item.writer).name,
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
    },
    reject(index) {
      Approval.rejectApproval(index);
    },
  },
  mounted() {
    this.tableInit();
  },
  watch: {
    approvalData() {
      this.tableData = [];
      this.tableInit();
    },
  },
};
</script>
<style lang=""></style>
