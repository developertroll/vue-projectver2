<template>
  <div>
    <BasicLayout @menuSelect="handleSelect">
      <MainContent :currentMenu="currentMenu" />
    </BasicLayout>
  </div>
</template>

<script>
import BasicLayout from "./components/layout/BasicLayout.vue";
import MainContent from "./components/MainContent.vue";
export default {
  name: "App",
  components: {
    BasicLayout,
    MainContent,
  },
  data() {
    return {
      currentMenu: {
        label: "일정관리 시스템",
        index: "MainPage",
        path: "layout",
      },
    };
  },

  methods: {
    handleSelect(item) {
      this.currentMenu = {
        label: item.label,
        index: item.index,
        path: item.path,
      };
    },
  },
};
</script>

<style></style>
