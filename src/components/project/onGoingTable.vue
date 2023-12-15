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
                <dialogSlot :title="dialogTitle(scope.row.status)" ref="dialog">
                  <template #default>
                    <CreateProgress
                      :parentWork="scope.row.index"
                      @saveForm="finishProgress"
                      v-if="scope.row.status === '진행'"
                    />
                    <generalDescription
                      :parentLabel="descCol"
                      :parentData="detailData(scope.row.index)"
                      v-else
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
import generalDescription from "../common/generalDescription.vue";
import { Approval } from "../composables/Approval";
export default {
  name: "onGoingTable",
  components: {
    showProject,
    dialogSlot,
    CreateProgress,
    generalDescription,
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
      descCol: {
        desc: "작업내용",
        etc: "비고",
      },
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
      this.$refs.dialog.closeDialog();
      this.$emit("finishProgress", item);
    },
    dialogTitle(item) {
      switch (item) {
        case "결재요청":
          return "상세";
        case "진행":
          return "업무 보고";
        case "완료":
          return "상세";
        default:
          return "상세";
      }
    },
    detailData(index) {
      let target = Work.getWorkByIndex(index);
      if (target.desc === undefined)
        target = Approval.getApprovalByParentIdx(index)[0];
      const result = {
        desc: target.desc,
        etc: target.etc,
      };
      return result;
    },
  },
  mounted() {
    this.tableInit();
  },
};
</script>
<style lang=""></style>
