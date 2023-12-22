import { shallowReactive } from "vue";
import moment from "moment";
import { Project } from "./Project";
import { Work } from "./Work";
import { Alarm } from "./Alarm";
import { Member } from "./Member";

export const Approval = shallowReactive({
  List: localStorage.getItem("approvalList")
    ? JSON.parse(localStorage.getItem("approvalList"))
    : [],
  template: {
    index: "",
    parentIdx: "",
    parentType: "",
    update: "",
    master: "",
    status: "",
    writer: "",
  },
  createApproval(project) {
    if (project.ApprovalLine.length > 1) {
      for (let i = 0; i < project.ApprovalLine.length; i++) {
        if (i === 0) {
          const approval = {
            index: this.List.length,
            parentIdx: project.index,
            parentType: "project",
            title: project.title,
            master: project.ApprovalLine[i].index,
            status: "결재요청",
            writer: project.master,
            update: moment().format("YYYY-MM-DD"),
          };
          this.List.push(approval);
          Alarm.createAlarm(
            "approvalRequest",
            approval.writer,
            approval.master
          );
          continue;
        }
        // 0 1 2를 0,1 / 1,2 식으로 배분
        const approval = {
          index: this.List.length,
          parentIdx: project.index,
          parentType: "project",
          title: project.title,
          master: project.ApprovalLine[i].index,
          status: "대기",
          writer: project.ApprovalLine[i - 1].index,
          update: moment().format("YYYY-MM-DD"),
        };
        this.List.push(approval);
      }
    } else {
      const approval = {
        index: this.List.length,
        parentIdx: project.index,
        parentType: "project",
        title: project.title,
        master: project.ApprovalLine[0].index,
        status: "결재요청",
        writer: project.master,
        update: moment().format("YYYY-MM-DD"),
      };
      this.List.push(approval);
    }
    localStorage.setItem("approvalList", JSON.stringify(this.List));
  },
  finishApproval(index) {
    try {
      const target = this.List.find((el) => el.index === index);
      target.status = "결재완료";
      Alarm.createAlarm("approvalApproved", target.master, target.writer);
      if (
        this.List.find(
          (el) =>
            target.master === el.writer &&
            el.parentIdx === target.parentIdx &&
            el.index !== target.index &&
            target.index < el.index &&
            el.status === "대기"
        ) !== undefined
      ) {
        // 다음 결재가 대기에서 결재요청 상태로 바뀜
        const nextApproval = this.List.find(
          (el) =>
            target.master === el.writer &&
            el.parentIdx === target.parentIdx &&
            el.index !== target.index &&
            target.index < el.index &&
            el.status === "대기"
        );
        nextApproval.status = "결재요청";
        nextApproval.update = moment().format("YYYY-MM-DD");
        Alarm.createAlarm(
          "approvalRequest",
          nextApproval.writer,
          nextApproval.master
        );
      } else {
        // 다음 결재가 없는 마지막 결재일때
        switch (target.parentType) {
          case "project": {
            let parentProject = Project.findProjectByIndex(target.parentIdx);
            parentProject.status = "진행";
            Work.createWork(parentProject);
            Alarm.createAlarm(
              "projectApproved",
              target.master,
              parentProject.master
            );
            localStorage.setItem("projectList", JSON.stringify(Project.List));
            break;
          }
          case "work":
            Work.finishWork(target.parentIdx, target.desc, target.etc);
            Alarm.createAlarm("workApproved", target.master, target.writer);
            break;
          default: {
            console.log("error");
            break;
          }
        }
      }
      localStorage.setItem("approvalList", JSON.stringify(this.List));
      this.List = JSON.parse(localStorage.getItem("approvalList"));
    } catch (e) {
      console.log(e);
    }
  },
  callApprovalList(status) {
    if (status === "대기") {
      return this.List.filter(
        (el) =>
          el.status === status &&
          (el.master === Member.currentMember ||
            el.writer === Member.currentMember)
      );
    }
    return this.List.filter(
      (el) => el.status === status && el.master === Member.currentMember
    );
  },
  callAllList() {
    return this.List;
  },
  findApprovalByIndex(index) {
    return this.List.find(
      (el) => el.index === index && el.master === Member.currentMember
    );
  },
  findparentProjectIndexByIndex(index) {
    return this.List.find((el) => el.index === index).parentIdx;
  },
  rejectApproval(index) {
    const target = this.List.find((el) => el.index === index);
    switch (target.parentType) {
      case "project": {
        let parentProject = Project.findProjectByIndex(target.parentIdx);
        parentProject.status = "반려";
        Alarm.createAlarm(
          "approvalRejected",
          target.master,
          parentProject.master
        );
        localStorage.setItem("projectList", JSON.stringify(Project.List));
        break;
      }
      case "work": {
        let parentWork = Work.getOriginalWorkByIndex(target.parentIdx);
        parentWork.status = "진행";
        Alarm.createAlarm("workRejected", target.master, parentWork.member);
        Work.refreshWorkList();
        break;
      }
      default: {
        console.log("error");
        break;
      }
    }
    const chainedApproval = this.List.filter(
      (el) =>
        el.parentIdx === target.parentIdx &&
        el.index > target.index &&
        el.status === "대기"
    );
    // chainedApproval과 target을 List에서 삭제
    chainedApproval.forEach((el) => {
      this.List.splice(this.List.indexOf(el), 1);
    });
    this.List.splice(this.List.indexOf(target), 1);
    // List내 index 재정렬
    this.List.forEach((el, index) => {
      el.index = index;
    });

    localStorage.setItem("approvalList", JSON.stringify(this.List));
    this.List = JSON.parse(localStorage.getItem("approvalList"));
  },
  createWorkApproval(newWork) {
    try {
      const targetWork = Work.getWorkByIndex(newWork[0].index);
      Work.getOriginalWorkByIndex(newWork[0].index).status = "결재요청";
      const approval = {
        index: this.List.length,
        parentIdx: targetWork.index,
        parentType: "work",
        title: `${targetWork.member}의 ${targetWork.detail}`,
        master: targetWork.master,
        status: "결재요청",
        writer: targetWork.member,
        update: moment().format("YYYY-MM-DD"),
        desc: newWork[0].desc,
        etc: newWork[0].etc,
      };
      this.List.push(approval);
      Work.refreshWorkList();
      localStorage.setItem("approvalList", JSON.stringify(this.List));
      this.List = JSON.parse(localStorage.getItem("approvalList"));
    } catch (e) {
      console.log(e);
    }
  },
  // 부모 인덱스와 결재자 인덱스를 받아서 결재 상태를 반환
  getStatusByParentIdxMember(parentIdx, memberIdx) {
    const target = this.List.find(
      (el) => el.parentIdx === parentIdx && el.master === memberIdx
    );
    return target.status;
  },
  // 이 함수는 업무 결재를 찾을때 사용하기 위해 만들어짐.
  getApprovalByParentIdx(parentIdx) {
    return this.List.filter((el) => el.parentIdx === parentIdx);
  },
});
