<template lang="">
  <!-- 이 페이지는 프로젝트 Plan과 관련된 모든 페이지를 관리하는 페이지가 될 것임. -->
  <div v-if="active === 1">
    <CreatePlan @callFinish="callFinish" />
  </div>
  <div v-else>
    <div class="rightSideButtons">
      <el-button type="primary" @click="changeView">생성</el-button>
    </div>
    <PlanTable />
  </div>
</template>
<script>
import CreatePlan from "./CreatePlan.vue";
import PlanTable from "./PlanTable.vue";
export default {
  name: "ProjectPlan",
  components: {
    CreatePlan,
    PlanTable,
  },
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    callFinish(item) {
      this.$emit("callFinish", item);
    },
    changeView() {
      this.active = 1;
    },
  },
};
</script>
<style lang=""></style>
