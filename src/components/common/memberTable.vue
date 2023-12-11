<template lang="">
  <el-table :data="memberData" border>
    <el-table-column type="index" v-if="ApprovalCheck" />
    <el-table-column prop="name" label="이름" />
    <el-table-column prop="department" label="분야" />
    <el-table-column prop="rank" label="직급" />
  </el-table>
</template>
<script>
import { Member } from "../composables/Member";
export default {
  name: "memberTable",
  data() {
    return {
      tableData: [],
    };
  },
  props: {
    parentData: {
      type: Array,
      default: () => [],
      required: true,
    },
    ApprovalCheck: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    memberData() {
      if (!this.ApprovalCheck) {
        const List = [];
        this.parentData.forEach((item) => {
          List.push(Member.findMemberByIndex(item));
        });
        return List;
      } else {
        const List = [];
        this.parentData.forEach((item) => {
          let member = Member.findMemberByIndex(item.index);
          List[item.order] = member;
        });
        return List;
      }
    },
  },
};
</script>
<style lang=""></style>
