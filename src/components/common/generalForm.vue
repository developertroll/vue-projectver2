<template lang="">
  <el-form :model="form">
    <el-form-item v-for="item in columns" :label="item" :key="item">
      <el-input v-if="item !== '기한'" v-model="form[item]" />

      <el-date-picker
        type="daterange"
        placeholder="기한을 입력하세요"
        v-model="form[item]"
        range-seperator="~"
        start-placeholder="시작일"
        end-placeholder="종료일"
        value-format="YYYY-MM-DD"
        format="YYYY/MM/DD"
        v-else
      />
    </el-form-item>
  </el-form>
  <el-button type="primary" @click="saveForm">저장</el-button>
  <!-- <el-button type="primary" @click="debug">디버그</el-button> -->
</template>
<script>
export default {
  name: "generalForm",
  data() {
    return {
      form: [],
    };
  },
  emits: ["saveForm"],
  props: {
    columns: {
      type: Array,
      default: () => [],
      required: true,
    },
    parentData: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    formData() {
      // columns에 존재하는 각각의 값이 form이라는 Object의 key가 되고, value는 빈 문자열로 초기화
      const newform = {};
      this.columns.forEach((item) => {
        newform[item] = "";
      });
      return newform;
    },
  },
  methods: {
    saveForm() {
      this.$emit("saveForm", this.form);
    },
    debug() {
      console.log(this.form);
      console.log(this.formData);
      console.log(this.columns);
    },
  },
  mounted() {
    this.form = this.formData;
    if (this.parentData) {
      this.form = this.parentData;
    }
  },
};
</script>
<style lang=""></style>
