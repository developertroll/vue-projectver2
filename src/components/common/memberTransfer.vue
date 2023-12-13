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
    <el-button type="primary" @click="saveMember">저장</el-button>
    <el-button>취소</el-button>
  </div>
</template>
<script>
import { Member } from "@/components/composables/Member";
export default {
  name: "MemberTransfer",
  emits: ["save"],
  computed: {
    memberData() {
      return Member.callTransferMember();
    },
  },
  props: {
    parentData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      member: [],
    };
  },
  methods: {
    saveMember() {
      this.$emit("save", this.member);
    },
  },
  mounted() {
    if (this.parentData.length !== 0) {
      this.member = this.parentData;
    }
  },
};
</script>
<style lang=""></style>
