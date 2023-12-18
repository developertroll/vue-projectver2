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
    <el-divider></el-divider>
    <el-row>
      <el-col :span="24">
        <el-card shadow="never">
          <template #header>
            <span>{{ title }}</span>
          </template>
          <div>
            <QuillEditor
              theme="snow"
              readOnly
              ref="Editor"
              @ready="getContent"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-button @click="debug"></el-button>
  </div>
</template>
<script>
import { Message } from "@/components/composables/Message";

export default {
  name: "ShowMessage",
  data() {
    return {
      descriptionData: [],
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
  },
  mounted() {
    this.pageInit();
  },
};
</script>
<style lang=""></style>
