<template lang="">
  <el-steps :active="active" finish-status="success">
    <el-step title="기본 정보" />
    <el-step title="인원 배정" />
    <el-step title="업무 배정" />
  </el-steps>
  <!-- step1은 title, desc를 만들고 기한을 정함 -->
  <!-- step2는 참여 인원을 넣고 결재 라인을 만듬 -->
  <!-- step3은 참여 인원의 기존 department를 기반으로 업무를 지정함 -->
  <div v-if="active === 0">
    <generalForm :columns="col" @saveForm="saveInfo" :parentData="protoForm1" />
  </div>
  <div v-if="active === 1">
    <div class="borderBox">
      <el-divider content-position="left"><h2>참여 인원</h2></el-divider>
      <MemberTransfer
        @save="saveMember"
        v-if="form2.member.length === 0"
        :parentData="form2.member"
      />
      <memberTable :parentData="form2.member" v-else />
    </div>
    <div class="borderBox">
      <el-divider content-position="left"><h2>결재 라인</h2></el-divider>
      <CreateApprovalLine
        @approvalLine="saveApp"
        v-if="form2.ApprovalLine.length === 0"
        :parentData="form2.ApprovalLine"
      />
      <memberTable
        :parentData="form2.ApprovalLine"
        :ApprovalCheck="true"
        v-else
      />
    </div>
  </div>
  <div v-if="active === 2">
    <AllocateWork
      :member="form2.member"
      @saveWork="saveWork"
      v-if="form3.work.length === 0"
    />
    <WorkTable :parentMember="form2.member" :parentWork="form3.work" v-else />
  </div>
  <div v-if="active === 3">
    <el-divider content-position="left"><h2>작성한 프로젝트</h2></el-divider>
    <showProject :projectData="protoProject" :isSaved="false" />
  </div>
  <div>
    <el-button type="primary" @click="debug">디버그</el-button>
    <el-button type="primary" @click="active--" :disabled="active === 0"
      >이전</el-button
    >
    <el-tooltip
      :disabled="nextCheck"
      content="작성한 값들을 모두 저장해야 다음 단계로 넘어갈 수 있습니다"
      placement="top"
    >
      <el-button
        type="primary"
        @click="active++"
        :disabled="!nextCheck"
        v-if="active !== 3"
        >다음</el-button
      >
      <el-button type="primary" @click="saveProject" v-else>저장</el-button>
    </el-tooltip>
  </div>
</template>
<script>
import memberTable from "@/components/common/memberTable.vue";
import MemberTransfer from "@/components/common/memberTransfer.vue";
import CreateApprovalLine from "@/components/common/createApprovalLine.vue";
import generalForm from "@/components/common/generalForm.vue";
import AllocateWork from "@/components/common/allocateWork.vue";
import WorkTable from "@/components/common/WorkTable.vue";
import showProject from "@/components/common/showProject.vue";
import { Project } from "../composables/Project";
export default {
  name: "CreatePlan",
  components: {
    MemberTransfer,
    CreateApprovalLine,
    generalForm,
    AllocateWork,
    memberTable,
    WorkTable,
    showProject,
  },
  emits: ["callFinish"],
  data() {
    return {
      active: 0,
      col: ["제목", "설명", "기한"],
      form1: {
        title: "",
        desc: "",
        start_date: "",
        end_date: "",
      },
      form2: {
        member: [],
        ApprovalLine: [],
      },
      form3: {
        work: [],
      },
    };
  },
  methods: {
    saveInfo(data) {
      this.form1 = {
        title: data.제목,
        desc: data.설명,
        start_date: data.기한[0],
        end_date: data.기한[1],
      };
    },
    saveMember(data) {
      console.log(data);
      this.form2.member = data;
    },
    saveApp(data) {
      this.form2.ApprovalLine = data;
    },
    debug() {
      console.log(this.form1);
      console.log(this.form2);
      console.log(this.form3);
      console.log(this.protoProject);
    },
    saveWork(data) {
      this.form3.work = data;
    },
    saveProject() {
      Project.createProject(this.protoProject);
      this.$emit("callFinish", "ProjectPlan");
    },
  },
  computed: {
    nextCheck() {
      switch (this.active) {
        case 0:
          if (
            this.form1.title === "" ||
            this.form1.desc === "" ||
            this.form1.start_date === "" ||
            this.form1.end_date === ""
          ) {
            return false;
          }
          return true;
        case 1:
          if (
            this.form2.member.length === 0 ||
            this.form2.ApprovalLine.length === 0
          ) {
            return false;
          }
          return true;
        case 2:
          if (this.form3.work.length === 0) {
            return false;
          }
          return true;
        default: {
          return false;
        }
      }
    },
    protoProject() {
      return { ...this.form1, ...this.form2, ...this.form3 };
    },
    protoForm1() {
      return {
        제목: this.form1.title,
        설명: this.form1.desc,
        기한: [this.form1.start_date, this.form1.end_date],
      };
    },
  },
};
</script>
<style lang=""></style>
