<template lang="">
  <el-table :data="memberData" border>
    <el-table-column type="index" v-if="ApprovalCheck" />
    <el-table-column prop="name" label="이름" />
    <el-table-column prop="department" label="분야" />
    <el-table-column prop="rank" label="직급" />
    <el-table-column
      prop="status"
      label="상태"
      v-if="ApprovalCheck && parentIdx !== null"
    />
  </el-table>
</template>
<script>
import { Member } from "../composables/Member";
import { Approval } from "../composables/Approval";
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
    parentIdx: {
      type: Number,
      default: null,
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
          if (!List[item.order].status && this.parentIdx !== null) {
            List[item.order].status = Approval.getStatusByParentIdxMember(
              this.parentIdx,
              item.index
            );
          }
        });
        return List;
      }
    },
  },
};
</script>
<style lang=""></style>
