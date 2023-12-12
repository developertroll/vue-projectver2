<template lang="">
  <div>
    <el-select v-model="currentMember">
      <el-option
        v-for="item in memberData"
        :key="item.key"
        :label="item.label"
        :value="item.key"
      />
    </el-select>
    {{ memberData }}
    {{ currentMember }}
  </div>
</template>
<script>
import { Member } from "@/components/composables/Member";
export default {
  name: "changeCurrent",
  data() {
    return {
      currentMember: Member.currentMember,
    };
  },
  computed: {
    memberData() {
      return Member.callTransferMember();
    },
  },
  watch: {
    currentMember() {
      Member.setCurrentMember(this.currentMember);
    },
  },
};
</script>
<style lang=""></style>
