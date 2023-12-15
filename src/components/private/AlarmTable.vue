<template lang="">
  <div>
    <el-table
      :data="tableData"
      :default-sort="{ prop: 'index', order: 'descending' }"
      :row-class-name="tableRowClass"
      @current-change="handleChange"
      border
    >
      <el-table-column prop="index" sortable label="번호" width="150px" />
      <el-table-column prop="content" label="내용" />
      <el-table-column prop="update" label="날짜" />
    </el-table>
  </div>
</template>
<script>
import { Alarm } from "@/components/composables/Alarm";
export default {
  name: "AlarmTable",
  props: {
    CurrentMember: {
      type: Number,
      required: true,
    },
    parentType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tableData: [],
    };
  },
  computed: {
    alarmData() {
      return Alarm.getListByTypeAndMember(this.parentType, this.CurrentMember);
    },
  },
  methods: {
    tableInit() {
      this.alarmData.forEach((item, index) => {
        // 아래 content 정하는 코드는 Alarm.js로 이동할 예정.
        this.tableData.push({
          index: index,
          content: item.content,
          update: item.update,
          referenceIndex: item.index,
          status: item.status,
        });
      });
    },
    handleChange(val) {
      Alarm.readAlarmByIndex(val.referenceIndex);
      this.$emit("pageMove", this.parentType);
    },
    tableRowClass({ row }) {
      if (row.status === true) {
        return "table-row-unread";
      } else {
        return "table-row-read";
      }
    },
  },
  mounted() {
    this.tableInit();
  },
};
</script>
<style lang=""></style>
