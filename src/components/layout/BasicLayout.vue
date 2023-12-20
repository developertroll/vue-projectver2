<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header
          ><BasicHeader @menuSelect="handleSelect" @AlarmSelect="AlarmSelect"
        /></el-header>
        <el-container>
          <el-aside width="200px"
            ><SideMenu @menuSelect="handleSelect"
          /></el-aside>
          <el-main><slot></slot></el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script>
import BasicHeader from "./BasicHeader.vue";
import SideMenu from "./SideMenu.vue";
export default {
  name: "BasicLayout",
  components: {
    BasicHeader,
    SideMenu,
  },
  emits: ["menuSelect", "AlarmSelect"],
  methods: {
    handleSelect(item) {
      this.$emit("menuSelect", item);
    },
    AlarmSelect(item) {
      this.$emit("AlarmSelect", item);
    },
  },
};
</script>
<style>
.el-header {
  background: #79bbff;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main {
  height: 100%;
}
</style>
