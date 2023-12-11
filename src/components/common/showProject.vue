<template lang="">
  <div>
    <div v-for="(value, key) in project" :key="key">
      <el-divider content-position="left"
        ><h2>{{ translateKey[key] }}</h2></el-divider
      >
      <div v-if="key === 'member'" class="borderBox">
        <memberTable :parentData="value" />
      </div>
      <div v-else-if="key === 'ApprovalLine'" class="borderBox">
        <memberTable :parentData="value" :ApprovalCheck="true" />
      </div>
      <div v-else-if="key === 'work'" class="borderBox">
        <WorkTable :parentMember="project.member" :parentWork="value" />
      </div>
      <div class="borderBox" v-else>{{ value }}</div>
    </div>
  </div>
</template>
<script>
import memberTable from "@/components/common/memberTable.vue";
import WorkTable from "@/components/common/WorkTable.vue";
import { Project } from "../composables/Project";
export default {
  name: "showProject",
  components: {
    memberTable,
    WorkTable,
  },
  props: {
    isSaved: {
      type: Boolean,
      default: true,
    },
    projectData: {
      type: Object,
      default: () => ({}),
    },
    projectIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      project: this.isSaved ? {} : this.projectData,
      translateKey: {
        title: "프로젝트 이름",
        desc: "설명",
        start_date: "시작일",
        end_date: "종료일",
        member: "참여 인원",
        ApprovalLine: "결재 라인",
        work: "업무",
        master: "작성자",
        status: "상태",
      },
    };
  },
  methods: {
    findSavedByIndex() {
      if (this.isSaved) {
        const result = Project.findProjectByIndex(this.projectIndex);
        const { index, ...newResult } = result;
        this.project = newResult;
        console.log(index);
      }
    },
  },
  mounted() {
    this.findSavedByIndex();
  },
};
</script>
<style lang=""></style>
