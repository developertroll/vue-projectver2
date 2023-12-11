<template lang="">
  <!-- 크게 3가지 파트로 나누어짐. 조직도를 불러와서 선택할 수 있게 하는 왼쪽 창. 선택한 사람들이 결재라인에 들어갈 것이라는 것을 표현하는 창. 2번째 창 위쪽에 자주 쓰는 결재라인을 불러오는 기능. -->
  <div class="borderBox">
    <div class="rightSideButtons">
      <el-select v-model="ApprovalLineName" placeholder="자주 쓰는 결재라인">
        <el-option
          v-for="item in selectMenu"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button type="primary" @click="loadMenu">불러오기</el-button>
    </div>
    <div class="rightSideButtons">
      <el-button type="primary" @click="changeUp"
        ><el-icon><ArrowUpBold /></el-icon
      ></el-button>
      <el-button type="primary" @click="changeDown"
        ><el-icon><ArrowDownBold /></el-icon
      ></el-button>
      <el-button type="primary" @click="clearAll">초기화</el-button>
      <el-button type="primary" @click="saveLine">결재라인 저장</el-button>
    </div>
    <el-row class="card-box">
      <el-col :span="6">
        <el-card shadow="never" class="card-box-1">
          <memberTree
            @onNodeClick="checkedTable"
            ref="memberT"
            :currentCheck="Checked"
          />
        </el-card>
      </el-col>
      <el-col :span="8" class="CenterButtons">
        <el-button type="primary" @click="removeLine"
          ><el-icon><ArrowLeftBold /></el-icon
        ></el-button>
        <el-button type="primary" @click="addLine"
          ><el-icon><ArrowRightBold /></el-icon
        ></el-button>
      </el-col>
      <el-col :span="10">
        <el-card shadow="never">
          <el-table
            ref="table"
            :data="ApprovalLine"
            @current-change="handleSelect"
            highlight-current-row
            table-layout="fixed"
          >
            <el-table-column type="index" label=""></el-table-column>
            <el-table-column prop="name" label="이름"></el-table-column>
            <el-table-column prop="rank" label="직급"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <!-- <div>
      {{ Checked }}
      {{ ApprovalLine }}
      {{ Select }}
    </div> -->
    <div class="CenterButtons">
      <el-button type="primary" @click="saveEmit">저장</el-button>
    </div>
  </div>
</template>
<script>
import {
  ArrowRightBold,
  ArrowLeftBold,
  ArrowUpBold,
  ArrowDownBold,
} from "@element-plus/icons-vue";
import memberTree from "./memberTree.vue";
import { ApprovalLine } from "../composables/ApprovalLine";
import { ElMessageBox, ElMessage } from "element-plus";

export default {
  name: "CreateApprovalLine",
  emits: ["approvalLine"],
  components: {
    memberTree,
    ArrowDownBold,
    ArrowUpBold,
    ArrowLeftBold,
    ArrowRightBold,
  },
  props: {
    parentData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      Checked: [],
      ApprovalLine: [],
      ApprovalLineName: "",
      Select: [],
    };
  },
  methods: {
    checkedTable(data) {
      this.Checked = [];
      this.clearSelect();
      console.log(data);
      this.Checked.push(data);
    },
    handleSelect(data) {
      if (data === null) {
        this.Select = [];
        return;
      }
      this.Checked = [];
      console.log(data);
      this.Select = [data];
    },
    changeUp() {
      if (this.Select.length === 0) {
        this.showErrorMessage();
        return;
      }
      let index = this.ApprovalLine.indexOf(this.Select[0]);
      if (index > 0) {
        let temp = this.ApprovalLine[index];
        this.ApprovalLine[index] = this.ApprovalLine[index - 1];
        this.ApprovalLine[index - 1] = temp;
      }
    },
    changeDown() {
      if (this.Select.length === 0) {
        this.showErrorMessage();
        return;
      }
      let index = this.ApprovalLine.indexOf(this.Select[0]);
      if (index < this.ApprovalLine.length - 1) {
        let temp = this.ApprovalLine[index];
        this.ApprovalLine[index] = this.ApprovalLine[index + 1];
        this.ApprovalLine[index + 1] = temp;
      }
    },
    addLine() {
      if (this.Checked.length === 0) {
        this.showErrorMessage();
        return;
      }
      if (
        this.ApprovalLine.filter((e) => e.index === this.Checked[0].index)
          .length > 0
      ) {
        console.log("이미 존재");
        return;
      } else {
        this.ApprovalLine.push(this.Checked[0]);
      }
      this.Checked = [];
      this.$refs.memberT.clearHighlight();
      console.log(this.ApprovalLine);
    },
    removeLine() {
      if (this.Select.length === 0) {
        this.showErrorMessage();
        return;
      }
      let index = this.ApprovalLine.indexOf(this.Select[0]);
      if (index > -1) {
        this.ApprovalLine.splice(index, 1);
      }
      this.clearSelect();
    },
    clearSelect() {
      this.Select = [];
      this.$refs.table.setCurrentRow();
    },
    clearAll() {
      this.ApprovalLine = [];
      this.clearSelect();
    },
    saveLine() {
      ElMessageBox.prompt("결재라인 이름을 입력하세요", "결재라인 저장", {
        confirmButtonText: "저장",
        cancelButtonText: "취소",
        inputPattern: /\S/,
        inputErrorMessage: "결재라인 이름을 입력하세요",
      })
        .then(({ value }) => {
          ApprovalLine.saveLine(this.ApprovalLine, value);
          this.$forceUpdate();
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "취소되었습니다",
          });
        });
    },
    showErrorMessage() {
      ElMessage({
        type: "error",
        message: "잘못된 접근입니다",
      });
    },
    loadMenu() {
      if (this.ApprovalLineName === "") {
        this.showErrorMessage();
        return;
      } else {
        this.ApprovalLine = ApprovalLine.callLine(this.ApprovalLineName);
      }
    },
    saveEmit() {
      const result = [];
      this.ApprovalLine.forEach((item) => {
        result.push({
          index: item.index,
          order: this.ApprovalLine.indexOf(item),
        });
      });
      this.$emit("approvalLine", result);
    },
  },
  computed: {
    selectMenu() {
      return ApprovalLine.callSelectMenu();
    },
  },
  mounted() {
    if (this.parentData && this.parentData.length > 0) {
      this.ApprovalLine.push(
        this.parentData.map((item) => {
          return item.index;
        })
      );
    }
  },
};
</script>
<style scoped>
.card-box {
  display: flex;
  height: 100%;
  border: 1px solid #ebeef5;
}
.card-box-1 {
  height: 100%;
}
</style>
