<template lang="">
  <div>
    <el-table :data="tableData" border>
      <el-table-column prop="type" label="분야" />
      <el-table-column prop="detail" label="업무" />
      <el-table-column prop="deadline" label="마감일" />
      <el-table-column prop="status" label="상태" />
    </el-table>
    <generalForm :columns="col" @saveForm="saveProgress" />
  </div>
</template>
<script>
import generalForm from "../common/generalForm.vue";
import { Work } from "../composables/Work";
export default {
  name: "CreateProgress",
  components: {
    generalForm,
  },
  props: {
    parentWork: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      col: ["작업내용", "비고"],
      tableData: [],
    };
  },
  computed: {
    workData() {
      return Work.getWorkByIndex(this.parentWork);
    },
  },
  methods: {
    tableInit() {
      this.tableData.push(this.workData);
    },
    saveProgress(item) {
      const newWork = [];
      newWork.push({
        desc: item.작업내용,
        etc: item.비고,
        index: this.parentWork,
      });
      console.log(newWork, "CreateProgress에서 발생");
      this.$emit("saveForm", newWork);
    },
  },
  mounted() {
    this.tableInit();
  },
};
</script>
<style lang=""></style>
