<template>
  <div>
    <div class="headline">
      <el-row>
        <el-button type="primary" @click="returnToMain">목록</el-button>
        <h2>{{ Title }}</h2>
      </el-row>
    </div>
    <el-scrollbar max-height="400px">
      <div v-for="Message in MessageData" :key="Message.index">
        <div>
          <TalkTemplate
            :MessageIndex="Message.index"
            :checkChain="checkChainMessage(Message.index)"
          />
        </div>
      </div>
    </el-scrollbar>
    <el-input v-model="content" @keyup.enter="sendMessage">
      <template #append>
        <el-button type="primary" @click="sendMessage">전송</el-button>
      </template>
    </el-input>
  </div>
</template>
<script>
import { TalkMessage } from "@/components/composables/TalkMessage.js";
import moment from "moment";
import TalkTemplate from "./TalkTemplate.vue";
export default {
  name: "ShowTemplate",
  components: {
    TalkTemplate,
  },
  props: {
    GroupIndex: {
      type: Number,
      //   required: true,
    },
  },
  computed: {
    MessageData() {
      const target = TalkMessage.findMessageGroupByIndex(this.GroupIndex);
      if (Array.isArray(target)) {
        return target;
      } else {
        return [target];
      }
    },
  },
  data() {
    return {
      currentTime: moment().format("YYYY-MM-DD HH:mm:ss"),
      content: "",
      Title: "",
    };
  },
  methods: {
    pageInit() {
      this.Title = TalkMessage.findGroupByIndex(this.GroupIndex).name;
    },
    sendMessage() {
      TalkMessage.createMessage(this.GroupIndex, this.content);
      this.content = "";
    },
    returnToMain() {
      this.$emit("returnToMain");
    },
    // 이 함수는 MessageData에서 해당 index의 index를 찾고 그 index의 owner가 이전 index의 owner와 같은지 확인한다.
    checkChainMessage(index) {
      const targetIndex = this.MessageData.findIndex(
        (el) => el.index === index
      );
      console.log(targetIndex);
      if (targetIndex === 0) return false;
      const targetOwner = this.MessageData[targetIndex].owner;
      const previousOwner = this.MessageData[targetIndex - 1].owner;
      return targetOwner === previousOwner;
    },
  },
  mounted() {
    this.pageInit();
  },
};
</script>
<style></style>
