<template lang="">
  <div>
    <el-row class="tac">
      <el-col>
        <el-menu :collapse="isCollapse">
          <el-sub-menu
            v-for="menu in menuItem"
            :key="menu.index"
            :index="menu.index"
          >
            <template #title>
              <el-icon><component :is="menu.icon" /></el-icon>
              <span>{{ menu.label }}</span>
            </template>
            <el-menu-item
              @click="handleSelect(item)"
              v-for="item in menu.submenus"
              :key="item.index"
              :index="item.index"
            >
              {{ item.label }}
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Document, Briefcase, Monitor } from "@element-plus/icons-vue";
import { reactive, toRefs } from "vue";
export default {
  name: "SideMenu",
  data() {
    return {
      isCollapse: false,
    };
  },
  components: {
    Document,
    Briefcase,
    Monitor,
  },
  setup(props, context) {
    const state = reactive({
      menuItem: [
        {
          label: "결재",
          index: "0",
          icon: "Document",
          submenus: [
            { label: "결재", index: "ApprovalMain", path: "approval" },
          ],
        },
        {
          label: "프로젝트",
          index: "1",
          icon: "Briefcase",
          submenus: [
            { label: "프로젝트 계획", index: "ProjectPlan", path: "project" },
            { label: "업무", index: "WorkPage", path: "project" },
          ],
        },
        {
          label: "개인",
          index: "2",
          icon: "Monitor",
          submenus: [
            { label: "알람", index: "AlarmMain", path: "private" },
            { label: "메세지", index: "MessengerMain", path: "private" },
            { label: "그룹방", index: "TalkMain", path: "Talk" },
          ],
        },
        {
          label: "개발자 체크",
          index: "3",
          icon: "Briefcase",
          submenus: [
            { label: "로그인 수정", index: "changeCurrent", path: "dev" },
          ],
        },
      ],
    });
    const handleSelect = (item) => {
      context.emit("menuSelect", item);
    };

    return {
      ...toRefs(state),
      handleSelect,
    };
  },
};
</script>
<style scoped>
.tac {
  height: 100%;
}
.el-menu {
  height: 100%;
}
.el-menu-item {
  height: 100%;
}
</style>
