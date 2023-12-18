<template lang="">
  <div>
    <el-switch v-model="isGroup" active-text="단체" inactive-text="개인" />
    <!-- 단체 -->
    <div v-if="isGroup">
      <el-row>
        <el-col :span="12">
          <el-tabs type="border-card">
            <el-tab-pane label="개인">
              <memberTree @onNodeClick="addGroup" />
            </el-tab-pane>
            <el-tab-pane label="그룹">
              <checkBoxGroup :parentData="GroupedData" @groupSave="takeGroup" />
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="12">
          <memberTable :parentData="GroupData" />
        </el-col>
      </el-row>

      {{ GroupData }}
    </div>
    <!-- 개인 -->
    <div v-else>
      <!-- 개인은 memberTree에서 1개만 받을 예정 -->
      <memberTree @onNodeClick="addSingle" />

      <span v-if="SingleData.name"
        >선택된 사람: {{ SingleData.name }}({{ SingleData.department }})</span
      >
    </div>
    <div class="rightSideButtons">
      <el-button type="primary" @click="saveMember">저장</el-button>
      <el-button @click="reset">초기화</el-button>
    </div>
  </div>
</template>
<script>
import memberTree from "@/components/common/memberTree.vue";
import memberTable from "@/components/common/memberTable.vue";
import checkBoxGroup from "@/components/common/checkBoxGroup.vue";
import { Member } from "@/components/composables/Member";
import { ElMessage } from "element-plus";
export default {
  name: "assignMember",
  components: {
    memberTree,
    memberTable,
    checkBoxGroup,
  },
  props: {
    where: {
      type: String,
      default: "to",
    },
  },
  data() {
    return {
      isGroup: false,
      SingleData: {},
      GroupData: [],
      GroupedData: [],
      CurrentMember: Member.currentMember,
    };
  },
  methods: {
    addGroup(item) {
      if (!this.GroupData.includes(item.index)) {
        this.GroupData.push(item.index);
      }
    },
    addSingle(item) {
      if (item.index === this.CurrentMember) {
        ElMessage.error("본인에게 메세지를 보낼 수 없습니다");
        return;
      }
      this.SingleData = item;
    },
    takeGroup(item) {
      this.GroupedData = item;
    },
    reset() {
      this.GroupData = [];
      this.GroupedData = [];
      this.SingleData = {};
    },
    saveMember() {
      let result = null;
      if (this.isGroup) {
        ElMessage.info("본인이 배정되었다면 자동으로 제외됩니다.");
        result = this.GroupData.filter((item) => item !== this.CurrentMember);
        if (result.length === 0) {
          ElMessage.error(
            "본인만 배정되어 배정이 취소됩니다. 다시 배정해주세요"
          );
          return;
        }
      } else {
        result = this.SingleData.index;
      }
      if (result.length === 0) {
        ElMessage.error(
          "배정된 사람이 없거나 본인만 배정되어 있습니다. 다시배정해주세요."
        );
        this.reset();
        return;
      }
      this.$emit("saveMember", result, this.where);
    },
  },
  watch: {
    GroupedData() {
      this.GroupData = [];
      this.GroupedData.forEach((item) => {
        let target = Member.getMemberByDepartment(item);
        target.forEach((el) => {
          if (!this.GroupData.includes(el)) {
            this.GroupData.push(el);
          }
        });
      });
    },
  },
};
</script>
<style lang=""></style>
