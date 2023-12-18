<template lang="">
  <div>
    <div v-if="active === 0">
      <MessageTable />
    </div>
    <div v-if="active === 1">
      <ShowMessage
        :parentIndex="targetIndex"
        @reply="replyMessage"
        @resend="resendMessage"
        @deleteMessage="deleteMessage"
        @returnToMain="returnToMain"
      />
    </div>
    <div v-if="active === 2">
      <createMessage @saveMessage="sendMessage" v-if="!editSituation" />
      <editMessage :parentIndex="targetIndex" v-else />
    </div>
    <div class="rightSideButtons">
      <el-button type="primary" @click="active = 1">보기 테스트</el-button>
      <el-button type="primary" @click="active = 2">작성 테스트</el-button>
      <el-button type="primary" @click="editTest">수정테스트</el-button>
    </div>
  </div>
</template>
<script>
import createMessage from "./createMessage.vue";
import MessageTable from "./MessageTable.vue";
import ShowMessage from "./ShowMessage.vue";
import editMessage from "./editMessage.vue";
import { Message } from "@/components/composables/Message";
export default {
  components: {
    MessageTable,
    ShowMessage,
    createMessage,
    editMessage,
  },
  methods: {
    sendMessage(item) {
      Message.createMessage(item);
      this.$emit("callFinish", "MessageMain");
    },
    replyMessage() {
      this.editSituation = true;
      this.active = 2;
    },
    editTest() {
      this.active = 2;
      this.editSituation = true;
    },
  },
  data() {
    return {
      content: "",
      targetIndex: 0,
      active: 0,
      editSituation: false,
    };
  },
};
</script>
<style lang=""></style>
