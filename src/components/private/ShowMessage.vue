<template lang="">
  <div>
    <!-- 받는사람, 보낸사람, 참조인 1줄 -->
    <!-- 날짜 -->
    <!-- 제목 -->
    <!-- 내용 -->
    <!-- 버튼들 -->
    <el-descriptions :column="2" border>
      <el-descriptions-item
        v-for="item in descriptionData"
        :label="item.label"
        :key="item.key"
      >
        {{ item.value }}
      </el-descriptions-item>
    </el-descriptions>
    <el-divider content-position="left"><h2>내용</h2></el-divider>

    <el-descriptions col="1" border>
      <el-descriptions-item label="제목">{{ title }}</el-descriptions-item>
    </el-descriptions>

    <div class="bigSize">
      <QuillEditor
        :options="options"
        theme="snow"
        readOnly
        ref="Editor"
        @ready="getContent"
      />
    </div>
    <div class="rightSideButtons">
      <el-button type="primary" @click="reply">답장</el-button>
      <el-button type="primary" @click="resend">전달</el-button>
      <el-button type="primary" @click="deleteMessage">삭제</el-button>
      <el-button type="primary" @click="returnToMain">목록</el-button>
    </div>
  </div>
</template>
<script>
import { Message } from "@/components/composables/Message";
import { ElMessage, ElMessageBox } from "element-plus";

export default {
  name: "ShowMessage",
  data() {
    return {
      descriptionData: [],
      title: "",
      content: null,
      options: {
        modules: {
          toolbar: false,
        },
      },
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
  },
  methods: {
    pageInit() {
      this.descriptionData.push({
        label: "보낸사람",
        key: "from",
        value: this.messageData.from,
      });
      this.descriptionData.push({
        label: "받는사람",
        key: "to",
        value: this.messageData.to,
      });
      this.descriptionData.push({
        label: "참조인",
        key: "reference",
        value: this.messageData.reference,
      });
      this.descriptionData.push({
        label: "날짜",
        key: "update",
        value: this.messageData.update,
      });
      this.title = this.messageData.title;
    },
    debug() {
      console.log(this.messageData);
      console.log(this.descriptionData);
    },
    getContent() {
      console.log(this.$refs.Editor);
      console.log(this.messageData.content);
      try {
        this.$refs.Editor.setContents(this.messageData.content);
        console.log(this.$refs.Editor);
      } catch (e) {
        console.log(e);
      }
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
  height: 500px;
}
</style>
