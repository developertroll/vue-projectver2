<template lang="">
  <div>
    <el-tabs type="border-card" v-model="currentTab">
      <el-tab-pane label="프로젝트" name="project">
        <AlarmTable
          :parentType="'project'"
          :CurrentMember="CurrentMember"
          @pageMove="moveToMain"
        />
      </el-tab-pane>
      <el-tab-pane label="업무" name="work">
        <AlarmTable
          :parentType="'work'"
          :CurrentMember="CurrentMember"
          @pageMove="moveToMain"
        />
      </el-tab-pane>
      <el-tab-pane label="결재" name="approval">
        <AlarmTable
          :parentType="'approval'"
          :CurrentMember="CurrentMember"
          @pageMove="moveToMain"
        />
      </el-tab-pane>
      <el-tab-pane label="메시지" name="message">
        <AlarmTable
          :parentType="'message'"
          :CurrentMember="CurrentMember"
          @pageMove="moveToMain"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import AlarmTable from "./AlarmTable.vue";
import { Member } from "@/components/composables/Member";
export default {
  name: "AlarmMain",
  components: {
    AlarmTable,
  },
  inject: ["openedTab"],
  data() {
    return {
      CurrentMember: Member.currentMember,
      currentTab: this.openedTab,
    };
  },
  methods: {
    moveToMain(type) {
      switch (type) {
        case "project":
          this.$emit("backToMain", "ProjectPlan");
          break;
        case "work":
          this.$emit("backToMain", "WorkPage");
          break;
        case "approval":
          this.$emit("backToMain", "ApprovalMain");
          break;
        case "message":
          this.$emit("backToMain", "MessageMain");
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style lang=""></style>
