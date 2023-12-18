<template lang="">
  <div>
    <el-card shadow="never">
      <el-tree
        ref="tree"
        :data="memberData"
        @node-click="onNodeClick"
        node-key="key"
      ></el-tree>
    </el-card>
  </div>
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
  props: {
    currentCheck: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    memberData() {
      return Member.CallTeamTree();
    },
    isClear() {
      return (
        this.currentCheck[0] !== undefined &&
        this.$refs.tree.getCurrentKey() === this.currentCheck[0].index
      );
    },
  },
  methods: {
    onNodeClick(data) {
      if (data.children) {
        return;
      } else {
        this.$refs.tree.setCurrentKey(data.key);
        this.$emit("onNodeClick", Member.findMemberByIndex(data.key));
      }
    },
    clearHighlight() {
      if (this.isClear) {
        return;
      } else {
        this.$refs.tree.setCurrentkey([], false);
      }

      // this.$refs.tree.clearHighlight(); // Call clearHighlight method on el-tree component
    },
  },
};
</script>
<style lang=""></style>
