<template lang="">
  <div>
    <el-alert type="info" title="참고" show-icon :closable="false"
      >본인이 포함된 그룹을 선택시 자동으로 본인을 제외합니다.</el-alert
    >
    <el-checkbox-group v-model="checked">
      <el-checkbox-button v-for="group in Groups" :key="group" :label="group">{{
        group
      }}</el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>
<script>
export default {
  name: "checkBoxGroup",
  props: {
    parentData: {
      type: Array,
    },
  },
  data() {
    return {
      checked: [],
      Groups: ["개발", "디자인", "기획", "마케팅"],
    };
  },
  watch: {
    parentData() {
      this.checked = this.parentData;
    },
    checked() {
      this.$emit("groupSave", this.checked);
    },
  },
};
</script>
<style lang=""></style>
