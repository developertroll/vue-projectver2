<template lang="">
  <el-tree
    :data="memberData"
    @node-click="onNodeClick"
    highlight-current
  ></el-tree>
</template>
<script>
import { Member } from "@/components/composables/Member";
export default {
  name: "MemberTree",
  emits: ["onNodeClick"],
  data() {
    return {
      checked: [],
      indeterminate: [],
    };
  },
  computed: {
    memberData() {
      return Member.CallTeamTree();
    },
  },
  methods: {
    onNodeClick(data) {
      if (data.children) {
        return;
      } else {
        console.log(data);
        this.$emit("onNodeClick", Member.findMemberByIndex(data.key));
      }
    },
  },
};
</script>
<style lang=""></style>
