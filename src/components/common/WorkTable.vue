<template lang="">
  <div>
    <el-table :data="tableData">
      <el-table-column prop="name" label="이름" />
      <el-table-column prop="department" label="분야" />
      <el-table-column prop="detail" label="업무" />
    </el-table>
  </div>
</template>
<script>
import { Work } from "../composables/Work";
import { Member } from "../composables/Member";
export default {
  name: "WorkTable",
  data() {
    return {
      tableData: [],
    };
  },
  props: {
    parentWork: {
      type: Array,
      default: () => [],
      required: true,
    },
    parentMember: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  computed: {
    memberData() {
      const list = [];
      this.parentMember.forEach((item) => {
        list.push(Member.findMemberByIndex(item));
      });
      return list;
    },
  },
  methods: {
    WorkData() {
      const newRaw = [];
      this.memberData.forEach((item, index) => {
        newRaw.push({
          ...item,
          detail: this.parentWork[index],
        });
      });
      newRaw.forEach((item) => {
        this.tableData.push({
          name: item.name,
          department: item.department,
          detail: Work.deIndexifyDetail(item, item.detail),
        });
      });
    },
  },
  mounted() {
    this.WorkData();
  },
};
</script>
<style lang=""></style>
