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
  </el-table>
</template>
<script>
import { Member } from "@/components/composables/Member";
import { Project } from "@/components/composables/Project";
import dialogSlot from "../common/dialogSlot.vue";
import showProject from "../common/showProject.vue";
export default {
  name: "PlanTable",
  data() {
    return {
      tableData: [],
    };
  },
  components: {
    dialogSlot,
    showProject,
  },
  computed: {
    projectData() {
      const result = Project.callProjectList();
      return result;
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
  },
  mounted() {
    this.tableInit();
  },
};
</script>
<style lang=""></style>
