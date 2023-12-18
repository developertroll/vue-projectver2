<template>
  <QuillEditor v-model:content="content" theme="snow" :readOnly="readOnly" />
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
  },
  watch: {
    parentData() {
      this.content = this.parentData;
    },
  },
};
</script>
