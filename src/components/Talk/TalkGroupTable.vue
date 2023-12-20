<template lang="">
  <div>
    <div v-for="Group in sortedGroupData" :key="Group.index">
      <TalkGroupTemplate :GroupIndex="Group.index" @showRoom="showRoom" />
    </div>
  </div>
</template>
<script>
import { TalkMessage } from "@/components/composables/TalkMessage.js";
import { Member } from "@/components/composables/Member.js";
import TalkGroupTemplate from "./TalkGroupTemplate.vue";
import moment from "moment";
export default {
  name: "TalkGroupTable",
  components: {
    TalkGroupTemplate,
  },
  computed: {
    GroupData() {
      return TalkMessage.findGroupByMember(Member.currentMember);
      // GroupData는 현재 멤버가 속한 그룹들을 반환
    },
  },
  data() {
    return {
      sortedGroupData: [],
    };
  },
  methods: {
    sortGroup() {
      return this.GroupData.sort((a, b) =>
        moment(b.update).diff(moment(a.update))
      );
    },
    showRoom(item) {
      this.$emit("showRoom", item);
    },
  },
  mounted() {
    this.sortedGroupData = this.sortGroup();
  },
};
</script>
<style lang=""></style>
