<template>
  <div>
    <QuillEditor v-model:content="content" theme="snow" :readOnly="readOnly" />
    <QuillEditor v-model:content="content" theme="snow" :readOnly="readOnly" />
    <el-button type="primary" @click="consoleContent">콘솔</el-button>
    <el-button type="primary" @click="insertContent">삽입테스트</el-button>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      content: "",
    };
  },
  props: {
    parentData: {
      type: Object,
      default: null,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    parentType: {
      type: String,
      default: "html",
    },
  },
  methods: {
    consoleContent() {
      console.log(this.content);
    },
    getContent() {
      return this.content;
    },
    insertContent() {
      this.content.insert("\ntest", {});
    },
  },
  watch: {
    parentData() {
      this.content = this.parentData;
    },
  },
};
</script>
