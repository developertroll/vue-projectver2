<template lang="">
  <div>
    <div>
      <!-- 해당 div는 각종 작업을 할 버튼들이 들어감. 해당 topbar는 고정 -->
      <!-- 뒤로가기(목록), 삭제, 오른쪽에는 자신에게 온 Message중에서 이게 몇번째인지 -->
      <el-row>
        <el-col :span="8">
          <el-button-group>
            <el-button type="primary" @click="returnToMain">목록</el-button>
            <el-button type="primary" @click="deleteMessage"
              >삭제</el-button
            ></el-button-group
          ></el-col
        >
        <el-col :span="4" :offset="12">{{ tempWhere }}</el-col>
      </el-row>
    </div>
    <div class="messageTitle">
      {{ title }}
    </div>
    <div>
      <!-- from아바타, from, 보낸시각(update), dropdown(답장,전달) -->
      <el-row>
        <el-col :span="4">보낸 사람</el-col>
        <el-col :span="4" v-if="isReference">받는 사람</el-col>
      </el-row>
      <el-row v-if="isReference">
        <el-col :span="4"><userAvatar :parentMember="originalFrom" /></el-col>
        <el-col :span="4"><userAvatar :parentMember="originalTo" /></el-col>
        <el-col :span="4" :offset="12">{{ messageData.update }}</el-col>
        <!-- 참조라서 받은 경우 이곳에 to도 avatar처리해서 보여주기 -->
      </el-row>
      <el-row v-else>
        <el-col :span="4"><userAvatar :parentMember="originalFrom" /></el-col>
        <el-col :span="4" :offset="16">{{ messageData.update }}</el-col>
        <!-- 참조라서 받은 경우 이곳에 to도 avatar처리해서 보여주기 -->
      </el-row>
    </div>
    <div class="bigSize">
      <!-- 내용 -->
      <div v-html="content"></div>
    </div>
    <div>
      <!-- 답장, 전달 큰 버튼 -->
      <el-button type="primary" @click="reply" size="large">답장</el-button>
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
      title: "",
      content: null,
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
      return Message.findMessageByIndex(this.parentIndex);
    },
    originalFrom() {
      return Message.findOriginalMessageByIndex(this.parentIndex).from;
    },
    originalTo() {
      return Message.findOriginalMessageByIndex(this.parentIndex).to;
    },
    tempWhere() {
      return Message.calculateMessageCountByMessage(this.parentIndex);
    },
    isReference() {
      return (
        Message.findOriginalMessageByIndex(this.parentIndex).to !==
        Member.currentMember
      );
    },
  },
  methods: {
    pageInit() {
      this.title = this.messageData.title;
      this.content = this.messageData.content;
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
