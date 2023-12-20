<template lang="">
  <div>
    <div>
      <!-- 해당 div는 각종 작업을 할 버튼들이 들어감. 해당 topbar는 고정 -->
      <!-- 뒤로가기(목록), 삭제, 오른쪽에는 자신에게 온 Message중에서 이게 몇번째인지 -->
      <el-row>
        <el-col :span="8">
          <el-button type="primary" @click="returnToMain"
            >목록</el-button
          ></el-col
        >
        <el-col :span="4" :offset="12">{{ tempWhere }}</el-col>
      </el-row>
    </div>
    <el-divider></el-divider>
    <div v-for="reply in entireChain" :key="reply.index">
      <!-- from아바타, from, 보낸시각(update), dropdown(답장,전달) -->
      <el-row>
        <el-col :span="4"
          ><userAvatar :parentMember="reply.from" v-if="entireChain.length > 0"
        /></el-col>
        <el-col :span="4" :offset="16">{{ reply.update }}</el-col>
      </el-row>
      <!-- 내용 -->
      <el-divider></el-divider>
      <div v-html="cutContent(reply.content)"></div>
      <el-divider></el-divider>
    </div>
    <div>
      <!-- 답장(본인일경우), 전달 큰 버튼 -->
      <el-button
        type="primary"
        @click="reply"
        size="large"
        v-if="lastWhoCheck()"
        >답장</el-button
      >
      <el-button type="primary" @click="resend" size="large">전달</el-button>
    </div>
  </div>
</template>
<script>
import { Message } from "@/components/composables/Message";
import { ElMessage, ElMessageBox } from "element-plus";
import userAvatar from "@/components/common/userAvatar.vue";
import { Member } from "@/components/composables/Member";

export default {
  name: "ShowMessage",
  components: {
    userAvatar,
  },
  data() {
    return {
      entireChain: [],
      currentMember: Member.currentMember,
    };
  },
  props: {
    parentIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    messageData() {
      return Message.getReplyChainArray(this.parentIndex);
    },
    tempWhere() {
      return Message.calculateMessageCountByMessage(this.parentIndex);
    },
    OG() {
      return Message.findOriginalMessageByIndex(this.parentIndex);
    },
  },
  methods: {
    pageInit() {
      this.entireChain = this.messageData;
    },
    debug() {
      console.log(this.messageData);
      console.log(this.descriptionData);
    },
    reply() {
      this.$emit("reply");
    },
    resend() {
      this.$emit("resend");
    },
    deleteMessage() {
      ElMessageBox.confirm("삭제하시겠습니까?", "경고", {
        confirmButtonText: "예",
        cancelButtonText: "아니오",
        type: "warning",
      }).then(() => {
        ElMessage({
          type: "info",
          message: "삭제되었습니다",
        });
        this.$emit("deleteMessage");
      });
    },
    returnToMain() {
      this.$emit("returnToMain");
    },
    // content의 내용을 기본 this.content과 비교해서 <p>=========</p>이하 내용을 모두 제거하기
    // 이후 남은 내용을 return
    cutContent(content) {
      let temp = content;
      let index = temp.indexOf("<p>=========");
      if (index !== -1) {
        temp = temp.substring(0, index);
      }
      return temp;
    },
    checkWho(index) {
      return Number(Message.findOriginalMessageByIndex(index).from);
    },
    lastWhoCheck() {
      return (
        this.entireChain.length > 0 &&
        this.entireChain[this.entireChain.length - 1].from !==
          this.currentMember
      );
    },
  },
  mounted() {
    this.pageInit();
  },
};
</script>
<style scoped>
.bigSize {
  margin-top: 20px;
  padding: 10px;
}
.messageTitle {
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
}
</style>
