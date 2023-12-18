<template lang="">
  <div>
    <div v-if="active === 0">
      <MessageTable />
    </div>
    <div v-if="active === 1">
      <ShowMessage :parentIndex="targetIndex" />
    </div>
    <div v-if="active === 2">
      <createMessage @saveMessage="sendMessage" />
    </div>
    <div class="rightSideButtons">
      <el-button type="primary" @click="active = 1">보기 테스트</el-button>
      <el-button type="primary" @click="active = 2">작성 테스트</el-button>
    </div>
  </div>
</template>
<script>
import createMessage from "./createMessage.vue";
import MessageTable from "./MessageTable.vue";
import ShowMessage from "./ShowMessage.vue";
import { Message } from "@/components/composables/Message";
export default {
  components: {
    MessageTable,
    ShowMessage,
    createMessage,
  },
  methods: {
    sendMessage(item) {
      Message.createMessage(item);
      this.$emit("callFinish", "MessageMain");
    },
  },
  data() {
    return {
      content: "",
      targetIndex: 0,
      active: 0,
    };
  },
};
</script>
<style lang=""></style>
