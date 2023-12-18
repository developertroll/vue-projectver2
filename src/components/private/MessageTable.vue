<template lang="">
  <div>
    <el-table :data="tableData">
      <!-- index, 제목, 날짜 -->
      <el-table-column prop="index" label="번호" sortable />
      <el-table-column prop="title" label="제목" />
      <el-table-column prop="update" label="날짜" sortable />
    </el-table>
  </div>
</template>
<script>
import { Message } from "@/components/composables/Message";
import { Member } from "@/components/composables/Member";
export default {
  name: "MessageTable",
  data() {
    return {
      CurrentMember: Member.currentMember,
      tableData: [],
    };
  },
  computed: {
    MessageData() {
      return Message.getMessage(this.CurrentMember);
    },
  },
  methods: {
    tableInit() {
      this.MessageData.forEach((el, index) => {
        this.tableData.push({
          referenceIndex: el.index,
          index: index,
          title: el.title,
          update: el.update,
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
