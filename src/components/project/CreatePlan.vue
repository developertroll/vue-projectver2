<template lang="">
  <el-steps :active="active" finish-status="success">
    <el-step title="Step 1" />
    <el-step title="Step 2" />
    <el-step title="Step 3" />
  </el-steps>
  <!-- step1은 title, desc를 만들고 기한을 정함 -->
  <!-- step2는 참여 인원을 넣고 결재 라인을 만듬 -->
  <!-- step3은 참여 인원의 기존 department를 기반으로 업무를 지정함 -->
  <div v-if="active === 0">
    <el-form>
      <el-form-item label="제목">
        <el-input placeholder="제목을 입력하세요" />
      </el-form-item>
      <el-form-item label="설명">
        <el-input type="textarea" placeholder="설명을 입력하세요" />
      </el-form-item>
      <el-form-item label="기한">
        <el-date-picker
          type="date"
          placeholder="기한을 입력하세요"
          v-model="value1"
          style="width: 100%"
        />
      </el-form-item>
    </el-form>
  </div>
  <div v-if="active === 1">
    <el-form
      ><MemberTransfer @save="saveMember" /><CreateApprovalLine />
    </el-form>
  </div>
  <div v-if="active === 2">
    <el-form> </el-form>
  </div>
  <div>
    <el-button type="primary" @click="active++">다음</el-button>
  </div>
</template>
<script>
import MemberTransfer from "@/components/common/memberTransfer.vue";
import CreateApprovalLine from "@/components/common/createApprovalLine.vue";
export default {
  name: "CreatePlan",
  components: {
    MemberTransfer,
    CreateApprovalLine,
  },
  data() {
    return {
      active: 0,
      form1: {
        title: "",
        desc: "",
        start_date: "",
        end_date: "",
      },
      form2: {
        member: [],
        master: [],
      },
    };
  },
};
</script>
<style lang=""></style>
