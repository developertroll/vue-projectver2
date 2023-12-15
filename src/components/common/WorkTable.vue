<template lang="">
  <div>
    <el-table :data="tableData" border>
      <el-table-column prop="name" label="이름" />
      <el-table-column prop="department" label="분야" />
      <el-table-column prop="detail" label="업무" />
      <el-table-column prop="status" label="상태" v-if="approvedCheck" />
    </el-table>
  </div>
</template>
<script>
import { Work } from "../composables/Work";
import { Member } from "../composables/Member";
export default {
  name: "WorkTable",
  data() {
    return {
      tableData: [],
    };
  },
  props: {
    parentProject: {
      type: Number,
      default: null,
    },
    parentWork: {
      type: Array,
      default: () => [],
      required: true,
    },
    parentMember: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  computed: {
    memberData() {
      const list = [];
      this.parentMember.forEach((item) => {
        list.push(Member.findMemberByIndex(item));
      });
      return list;
    },
    approvedCheck() {
      if (Work.getWorkByProject(this.parentProject).length > 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    WorkData() {
      const newRaw = [];
      const statusRaw = [];
      // MemberData와 parentWork가 길이, 순서가 같다는 가정
      this.memberData.forEach((item, index) => {
        newRaw.push({
          ...item,
          detail: this.parentWork[index],
        });
        statusRaw.push(
          Work.getWorkByMemberAndDetailAndProject(
            this.parentMember[index],
            this.parentWork[index],
            this.parentProject
          )
            ? Work.getWorkByMemberAndDetailAndProject(
                this.parentMember[index],
                this.parentWork[index],
                this.parentProject
              ).status
            : null
        );
      });
      // index 0번 데이터와 일치하는 WorkList 내부 데이터가 없으면 아직 저장되지 않은 값이기 때문에 status가 없지만 존재한다면 status를 찾아서 넣어야함
      newRaw.forEach((item, index) => {
        this.tableData.push({
          name: item.name,
          department: item.department,
          detail: Work.deIndexifyDetailWithMember(item, item.detail),
          referenceIndex: item.index,
          status: this.parentProject === null ? null : statusRaw[index],
        });
      });
    },
  },
  mounted() {
    this.WorkData();
  },
};
</script>
<style lang=""></style>
