<template lang="">
  <div>
    <el-result icon="success" title="작성 완료" :sub-Title="subTitle">
      <template #extra>
        <el-button type="primary" @click="backToMain">돌아가기</el-button>
      </template>
    </el-result>
    {{ finishType }}
  </div>
</template>
<script>
export default {
  name: "finishedPage",
  emits: ["backToMain"],
  data() {
    return {
      type: "",
    };
  },
  inject: ["finishType"],
  computed: {
    subTitle() {
      if (this.finishType === "MessageMain") {
        return "메세지가 전달되었습니다.";
      } else {
        return "결재라인에 따라 결재가 전달되었습니다.";
      }
    },
  },
  methods: {
    backToMain() {
      this.$emit("backToMain", this.finishType);
    },
  },
};
</script>
<style lang=""></style>
