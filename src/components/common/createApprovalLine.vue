<template lang="">
  <!-- 크게 3가지 파트로 나누어짐. 조직도를 불러와서 선택할 수 있게 하는 왼쪽 창. 선택한 사람들이 결재라인에 들어갈 것이라는 것을 표현하는 창. 2번째 창 위쪽에 자주 쓰는 결재라인을 불러오는 기능. -->
  <div>
    <memberTree @onNodeClick="checkedTable" />
  </div>
  <div>
    <el-table
      :data="Checked"
      highlight-current-row
      @current-change="handleSelect"
    >
      <el-table-column type="index" label="순서"> </el-table-column>
      <el-table-column prop="name" label="이름"></el-table-column>
      <el-table-column prop="rank" label="직급"></el-table-column>
    </el-table>
  </div>
  <div>
    <el-button type="primary" @click="changeUp">위로</el-button>
    <el-button type="primary" @click="changeDown">아래로</el-button>
  </div>
  <!-- <div>
    <el-select v-model="ApprovalLineName" placeholder="자주 쓰는 결재라인">
      <el-option
        v-for="item in ApprovalLine"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
  </div> -->
</template>
<script>
import { Member } from "@/components/composables/Member";
import memberTree from "./memberTree.vue";
export default {
  name: "CreateApprovalLine",
  components: {
    memberTree,
  },
  data() {
    return {
      Checked: [],
      ApprovalLine: [],
      ApprovalLineName: "",
      Select: {},
    };
  },
  computed: {
    interderminate() {
      if (this.Checked.length > 0) {
        let tableData = [];
        this.Checked.forEach((element) => {
          tableData.push(Member.findMemberByIndex(element.key));
        });
        return tableData;
      } else {
        return [];
      }
    },
  },
  methods: {
    checkedTable(data) {
      console.log(data);
      this.Checked.push(data);
    },
    handleSelect(data) {
      console.log(data);
      this.Select = data;
    },
    changeUp() {
      let index = this.Checked.indexOf(this.Select);
      if (index > 0) {
        let temp = this.Checked[index];
        this.Checked[index] = this.Checked[index - 1];
        this.Checked[index - 1] = temp;
      }
    },
    changeDown() {
      let index = this.Checked.indexOf(this.Select);
      if (index < this.Checked.length - 1) {
        let temp = this.Checked[index];
        this.Checked[index] = this.Checked[index + 1];
        this.Checked[index + 1] = temp;
      }
    },
  },
};
</script>
<style lang=""></style>
