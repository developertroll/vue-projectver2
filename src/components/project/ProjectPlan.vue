<template lang="">
  <!-- 이 페이지는 프로젝트 Plan과 관련된 모든 페이지를 관리하는 페이지가 될 것임. -->
  <div>
    <CreatePlan />
  </div>
</template>
<script>
import CreatePlan from "./CreatePlan.vue";
export default {
  name: "ProjectPlan",
  components: {
    CreatePlan,
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style lang=""></style>
