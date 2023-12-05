<template lang="">
  <div class="alignCenter">
    <el-transfer
      v-model="member"
      :data="memberData"
      :titles="['직원', '참여자']"
      filterable
    />
  </div>
  <div class="CenterButtons">
    <el-button type="primary">저장</el-button>
    <el-button>취소</el-button>
  </div>
</template>
<script>
import { Member } from "@/components/composables/Member";
export default {
  name: "MemberTransfer",
  computed: {
    memberData() {
      return Member.callTransferMember();
    },
  },
  data() {
    return {
      member: [],
    };
  },
  methods: {
    save() {
      this.$emit("save", this.member);
    },
  },
};
</script>
<style lang=""></style>
