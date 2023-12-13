<template lang="">
  <!-- 이 페이지는 CurrentMember에게 전달된 업무들의 모임이 될 페이지로, children을 가지는 table로 프로젝트/업무를 가지게 되고, 업무테이블에는 업무보고 버튼이 생기게 될 것임 -->
  <div>
    <WorkTable :CurrentMember="CurrentMember" />
  </div>
</template>
<script>
import { Member } from "../composables/Member";
import WorkTable from "./WorkTable.vue";
export default {
  name: "WorkPage",
  components: {
    WorkTable,
  },
  data() {
    return {
      CurrentMember: Member.currentMember,
    };
  },
};
</script>
<style lang=""></style>
