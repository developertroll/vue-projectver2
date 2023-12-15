<template>
  <div>
    <BasicLayout @menuSelect="handleSelect" @AlarmSelect="AlarmSelect">
      <MainContent :currentMenu="currentMenu" />
    </BasicLayout>
  </div>
</template>

<script>
import BasicLayout from "./components/layout/BasicLayout.vue";
import MainContent from "./components/MainContent.vue";
import { computed } from "vue";
export default {
  name: "App",
  components: {
    BasicLayout,
    MainContent,
  },
  provide() {
    return {
      openedTab: computed(() => this.openedTab),
    };
  },
  data() {
    return {
      currentMenu: {
        label: "일정관리 시스템",
        index: "MainPage",
        path: "layout",
      },
      openedTab: null,
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
    AlarmSelect(item) {
      this.currentMenu = {
        label: "알람",
        index: "AlarmMain",
        path: "private",
      };
      this.openedTab = item;
    },
  },
};
</script>

<style></style>
