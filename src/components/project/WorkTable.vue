<template lang="">
  <div>
    <el-table :data="tableData" border>
      <el-table-column type="expand">
        <template #default="props">
          <el-divider content-position="left"><h2>업무</h2></el-divider>
          <el-table :data="props.row.Work" border>
            <el-table-column prop="type" label="분야" />
            <el-table-column prop="detail" label="업무" />
            <el-table-column prop="deadline" label="마감일" />
            <el-table-column prop="status" label="상태" />
            <el-table-column>
              <template #default="scope">
                <el-button type="primary" @click="makeProgress(scope.row.index)"
                  >업무 보고</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="제목" />
      <el-table-column prop="start_date" label="시작일" />
      <el-table-column prop="end_date" label="종료일" />
      <el-table-column prop="status" label="상태" />
    </el-table>
  </div>
</template>
<script>
import { Work } from "../composables/Work";
import { Project } from "../composables/Project";
export default {
  name: "WorkTable",
  props: {
    CurrentMember: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      tableData: [],
    };
  },
  computed: {
    ProjectData() {
      return Project.getProjectByMember(this.CurrentMember);
    },
    WorkData() {
      const result = [];
      if (this.ProjectData.length === 0) {
        return result;
      }
      this.ProjectData.forEach((item) => {
        result.push(Work.getWorkByProjectAndMember(item, this.CurrentMember));
      });
      console.log(result);
      return result;
    },
  },
  methods: {
    tableInit() {
      try {
        this.ProjectData.forEach((item, index) => {
          this.tableData.push({
            title: item.title,
            start_date: item.start_date,
            end_date: item.end_date,
            status: item.status,
            referenceIndex: item.index,
            Work: [this.WorkData[index]] || [],
          });
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.tableInit();
  },
};
</script>
<style lang=""></style>
