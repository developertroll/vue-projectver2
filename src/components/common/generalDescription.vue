<template lang="">
  <div>
    <el-descriptions :column="1" border>
      <el-descriptions-item
        v-for="item in description"
        :label="item.label"
        :key="item.key"
      >
        {{ item.value }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script>
export default {
  name: "generalDescription",
  props: {
    parentData: {
      type: Object,
      required: true,
    },
    parentLabel: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      desc: [],
    };
  },
  computed: {
    description() {
      const newDesc = [];
      const newEntries = Object.entries(this.parentLabel);
      newEntries.forEach((item) => {
        newDesc.push({
          label: item[1],
          key: item,
          value: this.parentData[item[0]],
        });
      });
      return newDesc;
    },
  },
};
</script>
<style lang=""></style>
