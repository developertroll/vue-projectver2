<template lang="">
  <div>
    <div @click="clickedEvent">일정관리 시스템</div>
    <AlarmDropdown :parentMember="CurrentMember" @alarmSelect="alarmSelect" />
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
<style lang=""></style>
