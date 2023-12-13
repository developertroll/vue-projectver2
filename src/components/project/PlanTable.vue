<template lang="">
  <el-table :data="tableData">
    <el-table-column type="index" />
    <el-table-column prop="title" label="제목">
      <template #default="scope">
        <dialogSlot :title="scope.row.title">
          <template #default>
            <showProject
              :projectIndex="scope.row.referenceIndex"
              :isSaved="true"
            />
          </template>
        </dialogSlot>
      </template>
    </el-table-column>
    <el-table-column prop="member" label="참가자" show-overflow-tooltip />
    <el-table-column prop="start_date" label="시작일" />
    <el-table-column prop="end_date" label="종료일" />
    <el-table-column prop="status" label="상태" />
    <el-table-column label="작업" v-if="rejected">
      <template #default="scope">
        <el-button type="primary" @click="edit(scope.row.referenceIndex)"
          >수정</el-button
        >
        <el-button
          type="danger"
          @click="deleteProject(scope.row.referenceIndex)"
          >삭제</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { Member } from "@/components/composables/Member";
import { Project } from "@/components/composables/Project";
import dialogSlot from "../common/dialogSlot.vue";
import showProject from "../common/showProject.vue";
import { ElMessageBox, ElMessage } from "element-plus";
export default {
  name: "PlanTable",
  emits: ["edit"],
  data() {
    return {
      tableData: [],
    };
  },
  components: {
    dialogSlot,
    showProject,
  },
  props: {
    parentStatus: {
      type: String,
      default: "대기",
    },
    rejected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    projectData() {
      return Project.callProjectList(this.parentStatus);
    },
  },
  methods: {
    memberData(Array) {
      const result = [];
      Array.forEach((item) => {
        let member = Member.findMemberByIndex(item);
        result.push(member.name);
      });
      return result.join(", ");
    },
    tableInit() {
      this.projectData.forEach((item) => {
        this.tableData.push({
          title: item.title,
          member: this.memberData(item.member),
          start_date: item.start_date,
          end_date: item.end_date,
          status: item.status,
          referenceIndex: item.index,
        });
      });
    },
    edit(index) {
      this.$emit("edit", index);
    },
    deleteProject(index) {
      ElMessageBox.confirm("정말 삭제하시겠습니까?", "경고", {
        confirmButtonText: "삭제",
        cancelButtonText: "취소",
        type: "warning",
      })
        .then(() => {
          Project.deleteProject(index);
          this.$forceUpdate();
          ElMessage.info("삭제되었습니다");
        })
        .catch(() => {});
    },
  },
  mounted() {
    this.tableInit();
  },
  watch: {
    projectData: {
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
