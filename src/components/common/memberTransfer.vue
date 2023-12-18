<template lang="">
  <div class="alignCenter">
    <el-transfer
      v-model="member"
      :data="transferTable"
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
    disableTable: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      member: [],
      transferTable: [],
    };
  },
  methods: {
    saveMember() {
      this.$emit("save", this.member);
    },
    transferInit() {
      this.memberData.forEach((el) => {
        if (this.disableTable.includes(el.key)) {
          el.disabled = true;
        }
        this.transferTable.push(el);
      });
    },
  },
  mounted() {
    if (this.parentData.length !== 0) {
      this.member = this.parentData;
    }
    this.transferInit();
  },
};
</script>
<style lang=""></style>
