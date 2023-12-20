<template lang="">
  <div>
    <div class="rightSideButtons">
      <el-button type="primary" @click="active = 2" v-if="active === 0"
        >생성</el-button
      >
    </div>
    <div v-if="active === 0">
      <el-tabs type="border-card">
        <el-tab-pane label="받은 메시지">
          <MessageTable @readMessage="readMessage" parentType="to" />
        </el-tab-pane>
        <el-tab-pane label="보낸 메시지">
          <MessageTable @readMessage="readMessage" parentType="from" />
        </el-tab-pane>
        <el-tab-pane label="참조 메시지">
          <MessageTable @readMessage="readMessage" parentType="reference" />
        </el-tab-pane>
        <el-tab-pane label="읽은 메시지">
          <MessageTable @readMessage="readMessage" parentType="read" />
        </el-tab-pane>
        <el-tab-pane label="안읽은 메시지">
          <MessageTable @readMessage="readMessage" parentType="unread" />
        </el-tab-pane>
      </el-tabs>
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
      <createMessage
        @saveMessage="sendMessage"
        v-if="!editSituation"
        @returnToMain="returnToMain"
      />
      <editMessage
        :parentIndex="targetIndex"
        :replyCheck="replySituation"
        @editMessage="editMessage"
        @returnToMain="returnToMain"
        v-else
      />
    </div>
    <el-button type="primary" @click="active = 3" v-if="active !== 3"
      >그룹체크</el-button
    >
    <div v-if="active === 3">
      <ShowReplyGroup
        :parentIndex="targetIndex"
        @returnToMain="returnToMain"
        @reply="replyMessage"
        @resend="resendMessage"
      />
    </div>
  </div>
</template>
<script>
import createMessage from "./createMessage.vue";
import MessageTable from "./MessageTable.vue";
import ShowMessage from "./ShowMessage.vue";
import editMessage from "./editMessage.vue";
import { Message } from "@/components/composables/Message";
import ShowReplyGroup from "./ShowReplyGroup.vue";

export default {
  components: {
    MessageTable,
    ShowMessage,
    createMessage,
    editMessage,
    ShowReplyGroup,
  },
  methods: {
    sendMessage(item) {
      Message.createMessage(item);
      this.$emit("callFinish", "MessageMain");
    },
    editMessage(item) {
      Message.editMessage(item, this.targetIndex, this.editSituation);
      this.$emit("callFinish", "MessageMain");
      this.editSituation = false;
    },
    replyMessage() {
      if (this.groupSituation) {
        this.targetIndex = this.groupTempIndex;
      }
      this.editSituation = true;
      this.replySituation = true;
      this.active = 2;
    },
    resendMessage() {
      this.editSituation = true;
      this.active = 2;
    },
    deleteMessage() {
      this.$emit("callFinish", "MessageMain");
      Message.deleteMessage(this.targetIndex);
    },
    editTest() {
      this.active = 2;
      this.editSituation = true;
    },
    readMessage(refIndex, index) {
      if (Message.getReplyChainArray(refIndex).length > 0) {
        this.targetIndex = Message.getReplyChainArray(refIndex)[0].index;
        this.tempIndex = index;
        this.active = 3;
        this.groupSituation = true;
        this.groupTempIndex = refIndex;
      } else {
        this.targetIndex = refIndex;
        this.tempIndex = index;
        this.active = 1;
      }
    },
    returnToMain() {
      this.active = 0;
    },
  },
  data() {
    return {
      content: "",
      targetIndex: 1,
      active: 0,
      editSituation: false,
      replySituation: false,
      tempIndex: 0,
      groupSituation: false,
      groupTempIndex: 0,
    };
  },
};
</script>
<style lang=""></style>
