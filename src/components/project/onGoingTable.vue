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
                <dialogSlot :title="'업무보고'" ref="dialog">
                  <template #default>
                    <CreateProgress
                      :parentWork="scope.row.index"
                      @saveForm="finishProgress"
                    />
                  </template>
                </dialogSlot>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="제목">
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
      <el-table-column prop="start_date" label="시작일" />
      <el-table-column prop="end_date" label="종료일" />
      <el-table-column prop="status" label="상태" />
    </el-table>
  </div>
</template>
<script>
import { Work } from "../composables/Work";
import { Project } from "../composables/Project";
import showProject from "../common/showProject.vue";
import dialogSlot from "../common/dialogSlot.vue";
import CreateProgress from "./CreateProgress.vue";
export default {
  name: "onGoingTable",
  components: {
    showProject,
    dialogSlot,
    CreateProgress,
  },
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
      console.log(result, "WorkData");
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
    finishProgress(item) {
      console.log(item, "onGoingTable에서 발생");
      this.$refs.dialog.closeDialog();
      this.$emit("finishProgress", item);
    },
  },
  mounted() {
    this.tableInit();
  },
};
</script>
<style lang=""></style>
