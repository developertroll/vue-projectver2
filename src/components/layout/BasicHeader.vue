<template>
  <div class="headercontanier">
    <el-row>
      <el-col :span="4">
        <div @click="clickedEvent">일정관리 시스템</div>
      </el-col>
      <el-col :span="4" :offset="14">
        <div>안녕하세요,{{ CurrentMemberName }}님</div>
      </el-col>
      <el-col :span="1">
        <div>
          <AlarmDropdown
            :parentMember="CurrentMember"
            @alarmSelect="alarmSelect"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Alarm } from "@/components/composables/Alarm";
import { Member } from "@/components/composables/Member";
import AlarmDropdown from "@/components/layout/AlarmDropdown.vue";
export default {
  components: {
    AlarmDropdown,
  },
  methods: {
    clickedEvent() {
      this.$emit("menuSelect", {
        label: "일정관리 시스템",
        index: "MainPage",
        path: "layout",
      });
    },
    countAlarm() {
      this.alarmData.forEach((item) => {
        this.alarmCount += item.count;
      });
    },
    alarmSelect(type) {
      this.$emit("AlarmSelect", type);
    },
  },
  data() {
    return {
      alarmCount: 0,
      CurrentMember: Member.currentMember,
      CurrentMemberName: Member.getCurrentMemberName(),
    };
  },
  computed: {
    alarmData() {
      return Alarm.getMinifiedAlarmList(Member.currentMember);
    },
  },
  mounted() {
    this.countAlarm();
  },
};
</script>
<style>
.headercontanier {
  width: 100%;
}
</style>
