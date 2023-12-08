<template lang="">
  <el-steps :active="active" finish-status="success">
    <el-step title="기본 정보" />
    <el-step title="인원 배정" />
    <el-step title="업무" />
  </el-steps>
  <!-- step1은 title, desc를 만들고 기한을 정함 -->
  <!-- step2는 참여 인원을 넣고 결재 라인을 만듬 -->
  <!-- step3은 참여 인원의 기존 department를 기반으로 업무를 지정함 -->
  <div v-if="active === 0">
    <generalForm :columns="col" />
  </div>
  <div v-if="active === 1">
    <el-form
      ><MemberTransfer @save="saveMember" /><CreateApprovalLine
        @approvalLine="saveApp"
      />
    </el-form>
  </div>
  <div v-if="active === 2">
    <AllocateWork :member="form2.member" />
  </div>
  <div>
    <el-button type="primary" @click="active++">다음</el-button>
  </div>
</template>
<script>
import MemberTransfer from "@/components/common/memberTransfer.vue";
import CreateApprovalLine from "@/components/common/createApprovalLine.vue";
import generalForm from "@/components/common/generalForm.vue";
import AllocateWork from "@/components/common/allocateWork.vue";
export default {
  name: "CreatePlan",
  components: {
    MemberTransfer,
    CreateApprovalLine,
    generalForm,
    AllocateWork,
  },
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
    };
  },
  methods: {
    saveMember(data) {
      console.log(data);
      this.form2.member = data;
    },
    saveApp(data) {
      this.form2.ApprovalLine = data;
    },
  },
};
</script>
<style lang=""></style>
