<template lang="">
  <el-table :data="tableData">
    <el-table-column prop="name" label="이름" />
    <el-table-column prop="department" label="분야" />
    <el-table-column label="업무">
      <template #default="scope">
        <el-select v-model="scope.row.detail">
          <el-option
            v-for="item in getDetailWork(scope.row.department)"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </template>
    </el-table-column>
  </el-table>
  <div class="CenterButtons">
    <el-button type="primary" @click="saveEmit">저장</el-button>
    <el-button @click="clear">취소</el-button>
  </div>
</template>
<script>
import { Work } from "../composables/Work";
import { Member } from "../composables/Member";
export default {
  name: "AllocateWork",
  emits: ["saveWork"],
  data() {
    return {
      tableData: [],
    };
  },
  props: {
    member: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    memberData() {
      const list = [];
      this.member.forEach((item) => {
        list.push(Member.findMemberByIndex(item));
      });
      return list;
    },
    checkFull() {
      return this.tableData.every((item) => item.detail !== "");
    },
  },
  methods: {
    getDetailWork(department) {
      return Work.callDetailedWorkByParent(department);
    },
    dataInit() {
      this.memberData.forEach((item) => {
        this.tableData.push({
          name: item.name,
          department: item.department,
          detail: "",
        });
      });
    },
    saveEmit() {
      if (this.checkFull) {
        let list = [];
        this.tableData.forEach((item) => {
          list.push(Work.indexifyDetail(item));
        });
        this.$emit("saveWork", list);
      } else {
        this.$message({
          message: "업무를 모두 배정해주세요",
          type: "warning",
        });
      }
    },
    clear() {
      this.tableData = [];
      this.dataInit();
    },
  },
  mounted() {
    this.dataInit();
  },
};
</script>
<style lang=""></style>
