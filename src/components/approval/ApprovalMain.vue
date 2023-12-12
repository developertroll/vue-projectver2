<template lang="">
  <el-tabs type="border-card">
    <el-tab-pane label="진행중인 결재">
      <ApprovalTable :parentStatus="'결재요청'" />
    </el-tab-pane>
    <el-tab-pane label="대기중인 결재">
      <ApprovalTable :parentStatus="'대기'" />
    </el-tab-pane>
    <el-tab-pane label="완료된 결재">
      <ApprovalTable :parentStatus="'결재완료'" />
    </el-tab-pane>
  </el-tabs>
  <!-- 이 페이지는 탭 기능을 통해 현재 진행중인 결재, 대기중인 결재, 완료된 결재를 따로 볼 수 있게 만들 예정 -->
</template>
<script>
import ApprovalTable from "./ApprovalTable.vue";
export default {
  name: "ApprovalMain",
  components: {
    ApprovalTable,
  },
};
</script>
<style lang=""></style>
