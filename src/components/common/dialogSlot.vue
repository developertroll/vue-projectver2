<template>
  <div>
    <div>
      <el-button type="primary" @click="openDialog">{{ title }}</el-button>
    </div>
    <el-dialog v-model="dialogVisible" append-to-body :show-close="false">
      <template #header>
        <div class="el-header">
          <h2>{{ title }}</h2>
          <el-button @click="closeDialog">닫기</el-button>
        </div>
      </template>
      <template #default>
        <slot @saveForm="saveForm"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "dialogSlot",
  data() {
    return {
      dialogVisible: false,
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    saveForm(item) {
      this.$emit("saveForm", item);
      this.closeDialog();
    },
  },
};
</script>

<style lang=""></style>
