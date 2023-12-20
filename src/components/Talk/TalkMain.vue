<template lang="">
  <div>
    <div v-if="active === 0">
      <div class="rightSideButtons">
        <el-button-group>
          <el-button type="primary" @click="createGroup">그룹생성</el-button>
        </el-button-group>
      </div>
      <TalkGroupTable @showRoom="showRoom" />
    </div>
    <div v-if="active === 1">
      <CreateTalkGroup @createGroup="submitGroup" />
    </div>
    <div v-if="active === 2">
      <ShowTalk :GroupIndex="roomIndex" @returnToMain="returnToMain" />
    </div>
  </div>
</template>
<script>
import TalkGroupTable from "./TalkGroupTable.vue";
import CreateTalkGroup from "./CreateTalkGroup.vue";
import ShowTalk from "./ShowTalk.vue";
import { TalkMessage } from "@/components/composables/TalkMessage";
export default {
  name: "TalkMain",
  components: {
    TalkGroupTable,
    CreateTalkGroup,
    ShowTalk,
  },
  data() {
    return {
      active: 0,
      roomIndex: null,
    };
  },
  methods: {
    createGroup() {
      this.active = 1;
    },
    submitGroup(item) {
      TalkMessage.createGroup(item.name, item.member);
      this.active = 0;
    },
    showRoom(index) {
      this.roomIndex = index;
      this.active = 2;
    },
    returnToMain() {
      this.active = 0;
    },
  },
};
</script>
<style lang=""></style>
