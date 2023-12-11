<template lang="">
  <el-table :data="tableData">
    <el-table-column type="index" />
    <el-table-column prop="type" label="종류" />
    <el-table-column prop="writer" label="요청자" />
    <el-table-column prop="update" label="요청일" />
    <el-table-column prop="status" label="상태" />
  </el-table>
</template>
<script>
import { Approval } from "../composables/Approval";
export default {
  name: "ApprovalMain",
  computed: {
    approvalData() {
      return Approval.callApprovalList();
    },
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    tableInit() {
      this.approvalData.forEach((item) => {
        this.tableData.push({
          type: item.parentType,
          writer: item.writer,
          update: item.update,
          status: item.status,
          referenceIndex: item.index,
        });
      });
    },
  },
  mounted() {
    this.tableInit();
  },
};
</script>
<style lang=""></style>
