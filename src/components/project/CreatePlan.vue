<template lang="">
  <div>
    <el-steps :active="active" finish-status="success">
      <el-step title="기본 정보" />
      <el-step title="인원 배정" />
      <el-step title="업무 배정" />
    </el-steps>
    <!-- step1은 title, desc를 만들고 기한을 정함 -->
    <!-- step2는 참여 인원을 넣고 결재 라인을 만듬 -->
    <!-- step3은 참여 인원의 기존 department를 기반으로 업무를 지정함 -->
    <div v-if="active === 0">
      <el-divider content-position="left"><h2>기본 정보</h2></el-divider>
      <div class="CenterButtons">
        <el-button
          type="primary"
          @click="generalEdit = !generalEdit"
          v-if="form1.title !== '' && !generalEdit"
          >수정</el-button
        >
      </div>
      <generalForm
        :columns="col"
        @saveForm="saveInfo"
        :parentData="protoForm1"
        v-if="form1.title === '' || generalEdit"
      />
      <generalDescription
        :parentData="form1"
        :parentLabel="form1Translate"
        v-else
      />
    </div>
    <div v-if="active === 1">
      <div class="borderBox">
        <el-divider content-position="left"><h2>참여 인원</h2></el-divider>
        <el-space fill>
          <el-alert
            type="warning"
            show-icon
            :closable="false"
            v-if="form2.member.length !== 0 && !memberEdit"
          >
            <p>참여 인원을 수정할 시 업무 배정이 초기화됩니다</p>
          </el-alert>
        </el-space>
        <div class="CenterButtons">
          <el-button
            type="warning"
            @click="memberEdit = !memberEdit"
            v-if="form2.member.length !== 0 && !memberEdit"
            >수정</el-button
          >
        </div>
        <MemberTransfer
          @save="saveMember"
          v-if="form2.member.length === 0 || memberEdit"
          :parentData="form2.member"
        />
        <memberTable :parentData="form2.member" v-else />
      </div>
      <div class="borderBox">
        <el-divider content-position="left"><h2>결재 라인</h2></el-divider>
        <div class="CenterButtons">
          <el-button
            type="primary"
            @click="ApprovalLineEdit = !ApprovalLineEdit"
            v-if="form2.ApprovalLine.length !== 0 && !ApprovalLineEdit"
            >수정</el-button
          >
        </div>
        <CreateApprovalLine
          @approvalLine="saveApp"
          v-if="form2.ApprovalLine.length === 0 || ApprovalLineEdit"
          :parentData="form2.ApprovalLine"
        />
        <memberTable
          :parentData="form2.ApprovalLine"
          :ApprovalCheck="true"
          v-else
        />
      </div>
    </div>
    <div v-if="active === 2">
      <el-divider content-position="left"><h2>업무 배정</h2></el-divider>
      <div class="CenterButtons">
        <el-button
          type="primary"
          @click="workEdit = !worEdit"
          v-if="form3.work.length !== 0 && !workEdit"
          >수정</el-button
        >
      </div>
      <AllocateWork
        :member="form2.member"
        @saveWork="saveWork"
        :parentData="form3.work"
        v-if="form3.work.length === 0 || workEdit"
      />
      <WorkTable :parentMember="form2.member" :parentWork="form3.work" v-else />
    </div>
    <div v-if="active === 3">
      <el-divider content-position="left"><h2>작성한 프로젝트</h2></el-divider>
      <showProject :projectData="protoProject" :isSaved="false" />
    </div>
    <div>
      <el-button type="primary" @click="debug">디버그</el-button>
      <el-button type="primary" @click="active--" :disabled="active === 0"
        >이전</el-button
      >
      <el-tooltip
        :disabled="nextCheck"
        content="작성한 값들을 모두 저장해야 다음 단계로 넘어갈 수 있습니다"
        placement="top"
      >
        <el-button
          type="primary"
          @click="active++"
          :disabled="!nextCheck"
          v-if="active !== 3"
          >다음</el-button
        >
        <el-button type="primary" @click="saveProject" v-else>저장</el-button>
      </el-tooltip>
    </div>
  </div>
</template>
<script>
import memberTable from "@/components/common/memberTable.vue";
import MemberTransfer from "@/components/common/memberTransfer.vue";
import CreateApprovalLine from "@/components/common/createApprovalLine.vue";
import generalForm from "@/components/common/generalForm.vue";
import AllocateWork from "@/components/common/allocateWork.vue";
import WorkTable from "@/components/common/WorkTable.vue";
import showProject from "@/components/common/showProject.vue";
import { Project } from "../composables/Project";
import { ElMessage, ElMessageBox } from "element-plus";
import generalDescription from "../common/generalDescription.vue";
export default {
  name: "CreatePlan",
  components: {
    MemberTransfer,
    CreateApprovalLine,
    generalForm,
    AllocateWork,
    memberTable,
    WorkTable,
    showProject,
    generalDescription,
  },
  props: {
    Edit: {
      type: Boolean,
      default: false,
    },
    parentIndex: {
      type: Number,
      default: null,
    },
  },
  emits: ["callFinish"],
  data() {
    return {
      active: 0,
      col: ["제목", "설명", "기한"],
      form1Translate: {
        title: "제목",
        desc: "설명",
        start_date: "시작일",
        end_date: "마감일",
      },
      generalEdit: false,
      ApprovalLineEdit: false,
      memberEdit: false,
      workEdit: false,
      form1: {
        title: "",
        desc: "",
        start_date: "",
        end_date: "",
      },
      form2: {
        member: [],
        ApprovalLine: [],
      },
      form3: {
        work: [],
      },
    };
  },
  methods: {
    saveInfo(data) {
      this.form1 = {
        title: data.제목,
        desc: data.설명,
        start_date: data.기한[0],
        end_date: data.기한[1],
      };
      if (this.generalEdit) {
        this.generalEdit = false;
      }
    },
    saveMember(data) {
      if (this.form3.work.length !== 0 && this.form2.member !== data) {
        this.form3.work = [];
      }
      this.form2.member = data;
      if (this.memberEdit) {
        this.memberEdit = false;
      }
    },
    saveApp(data) {
      this.form2.ApprovalLine = data;
      if (this.ApprovalLineEdit) {
        this.ApprovalLineEdit = false;
      }
    },
    debug() {
      console.log(this.form1);
      console.log(this.form2);
      console.log(this.form3);
      console.log(this.protoProject);
      console.log(this.checkEdited());
    },
    saveWork(data) {
      this.form3.work = data;
    },
    saveProject() {
      if (this.Edit) {
        if (!this.checkEdited()) {
          ElMessageBox.confirm(
            "변경사항이 없습니다. 수정을 취소하시겠습니까?",
            "경고",
            {
              confirmButtonText: "예",
              cancelButtonText: "아니오",
              type: "warning",
            }
          ).then(() => {
            ElMessage({
              type: "info",
              message: "수정이 취소되었습니다",
            });
            this.$emit("cancelEdit");
          });
          return;
        }
        Project.EditProject(this.parentIndex, this.protoProject);
        this.$emit("callFinish", "ProjectPlan");
        return;
      }
      Project.createProject(this.protoProject);
      this.$emit("callFinish", "ProjectPlan");
    },
    checkEdited() {
      if (this.Edit) {
        const parentProject = Project.findProjectByIndex(this.parentIndex);
        // protoProject를 parentProject에 assign했을때 parentProject와 같은지 비교
        // 같으면 false, 다르면 true
        const result = Object.assign({}, parentProject, this.protoProject);
        console.log(result);
        const isEdited = Object.keys(result).some(
          (key) => result[key] !== parentProject[key]
        );
        return isEdited;
      } else {
        return false;
      }
    },
  },
  computed: {
    nextCheck() {
      switch (this.active) {
        case 0:
          if (
            this.form1.title === "" ||
            this.form1.desc === "" ||
            this.form1.start_date === "" ||
            this.form1.end_date === ""
          ) {
            return false;
          }
          return true;
        case 1:
          if (
            this.form2.member.length === 0 ||
            this.form2.ApprovalLine.length === 0
          ) {
            return false;
          }
          return true;
        case 2:
          if (this.form3.work.length === 0) {
            return false;
          }
          return true;
        default: {
          return false;
        }
      }
    },
    protoProject() {
      return { ...this.form1, ...this.form2, ...this.form3 };
    },
    protoForm1() {
      return {
        제목: this.form1.title,
        설명: this.form1.desc,
        기한: [this.form1.start_date, this.form1.end_date],
      };
    },
  },
  created() {
    if (this.Edit) {
      const parentProject = Project.findProjectByIndex(this.parentIndex);
      this.form1 = {
        title: parentProject.title,
        desc: parentProject.desc,
        start_date: parentProject.start_date,
        end_date: parentProject.end_date,
      };
      this.form2 = {
        member: parentProject.member,
        ApprovalLine: parentProject.ApprovalLine,
      };
      this.form3 = {
        work: parentProject.work,
      };
    }
  },
};
</script>
<style lang=""></style>
