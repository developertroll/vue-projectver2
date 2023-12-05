<template lang="">
  <div @click="clickedEvent">일정관리 시스템</div>
  <!-- <div>
    <el-button type="primary"></el-button>
  </div> -->
</template>
<script>
export default {
  methods: {
    clickedEvent() {
      this.$emit("menuSelect", {
        label: "일정관리 시스템",
        index: "MainPage",
        path: "layout",
      });
    },
  },
};
</script>
<style lang=""></style>
