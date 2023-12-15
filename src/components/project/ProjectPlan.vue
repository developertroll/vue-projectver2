<template lang="">
  <!-- 이 페이지는 프로젝트 Plan과 관련된 모든 페이지를 관리하는 페이지가 될 것임. -->
  <div>
    <el-tabs type="border-card" v-if="active === 0">
      <el-tab-pane label="대기중인 프로젝트">
        <div>
          <div class="rightSideButtons">
            <el-button type="primary" @click="changeView">생성</el-button>
          </div>
          <PlanTable />
        </div>
      </el-tab-pane>
      <el-tab-pane label="진행중인 프로젝트">
        <PlanTable :parentStatus="'진행'" />
      </el-tab-pane>
      <el-tab-pane label="반려된 프로젝트">
        <PlanTable :parentStatus="'반려'" :rejected="true" @edit="openEdit" />
      </el-tab-pane>
      <el-tab-pane label="완료된 프로젝트">
        <PlanTable :parentStatus="'완료'" />
      </el-tab-pane>
    </el-tabs>
    <div v-if="active === 1">
      <CreatePlan @callFinish="callFinish" v-if="editIndex === null" />
      <CreatePlan
        @callFinish="callFinish"
        v-if="editIndex !== null"
        :Edit="true"
        :parentIndex="editIndex"
        @cancelEdit="cancelEdit"
      />
    </div>
  </div>
</template>
<script>
import CreatePlan from "./CreatePlan.vue";
import PlanTable from "./PlanTable.vue";
export default {
  name: "ProjectPlan",
  emits: ["callFinish"],
  components: {
    CreatePlan,
    PlanTable,
  },
  data() {
    return {
      active: 0,
      editIndex: null,
    };
  },
  methods: {
    callFinish(item) {
      this.$emit("callFinish", item);
      this.editIndex = null;
    },
    changeView() {
      this.active = 1;
    },
    openEdit(index) {
      this.editIndex = index;
      this.active = 1;
    },
    cancelEdit() {
      this.editIndex = null;
      this.active = 0;
    },
  },
};
</script>
<style lang=""></style>
