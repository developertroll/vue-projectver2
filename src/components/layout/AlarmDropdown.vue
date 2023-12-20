<template lang="">
  <!-- 이 알람 버튼의 dropdown은 Alarm.js에서 가져온 type, count를 이용해서 (type에 맞는 아이콘)type의 알람이 count개 왔습니다 형식을 가지게 될 것임 -->
  <div>
    <el-badge :value="alarmCount" :max="10" :hidden="hiddenCount">
      <el-dropdown>
        <el-icon size="large">
          <Bell />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu
            v-if="alarmData.filter((e) => e.count > 0).length > 0"
          >
            <el-dropdown-item
              v-for="item in alarmData.filter((e) => e.count > 0)"
              :key="item.type"
              @click="handleSelect(item.type)"
            >
              <el-icon><component :is="iconTranslate(item.type)" /></el-icon>
              {{ translateType[item.type] }} 알람이 {{ item.count }} 개
              왔습니다.
            </el-dropdown-item>
          </el-dropdown-menu>
          <el-dropdown-item v-else disabled>
            새로운 알람이 없습니다.</el-dropdown-item
          >
        </template>
      </el-dropdown>
    </el-badge>
  </div>
</template>

<script>
import { Alarm } from "@/components/composables/Alarm";
import {
  Bell,
  Briefcase,
  Document,
  Setting,
  Message,
} from "@element-plus/icons-vue";
export default {
  name: "AlarmDropdown",
  components: {
    Bell,
    Briefcase,
    Document,
    Setting,
    Message,
  },
  data() {
    return {
      translateType: {
        project: "프로젝트",
        approval: "결재",
        work: "업무",
        message: "메세지",
      },
    };
  },
  props: {
    parentMember: {
      type: Number,
    },
  },
  computed: {
    alarmData() {
      return Alarm.getMinifiedAlarmList(this.parentMember);
    },
    alarmCount() {
      let count = 0;
      this.alarmData.forEach((item) => {
        count += item.count;
      });
      return count;
    },
    hiddenCount() {
      return this.alarmCount === 0;
    },
  },
  methods: {
    //type에 따라서 아이콘이 달라짐
    iconTranslate(type) {
      switch (type) {
        case "project":
          return "Briefcase";
        case "approval":
          return "Document";
        case "work":
          return "Setting";
        case "message":
          return "Message";
        default:
          return "Bell";
      }
    },
    handleSelect(item) {
      Alarm.readMinifiedAlarmList(item, this.parentMember);
      this.$emit("alarmSelect", item);
    },
  },
};
</script>
<style lang=""></style>
