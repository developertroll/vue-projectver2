import { shallowReactive } from "vue";
import { Member } from "./Member";
import { Project } from "./Project";
import moment from "moment";
export const Work = shallowReactive({
  WorkList: localStorage.getItem("workList")
    ? JSON.parse(localStorage.getItem("workList"))
    : [],
  refreshWorkList() {
    localStorage.setItem("workList", JSON.stringify(this.WorkList));
    this.WorkList = JSON.parse(localStorage.getItem("workList"));
  },
  template: {
    index: "",
    member: "",
    master: "",
    project: "",
    type: "",
    deadline: "",
    update: "",
    status: "",
    detail: "",
  },
  WorkTypeList: [
    {
      value: "개발",
      label: "개발",
    },
    {
      value: "디자인",
      label: "디자인",
    },
    {
      value: "기획",
      label: "기획",
    },
    {
      value: "마케팅",
      label: "마케팅",
    },
  ],
  detailWorkTypeList: [
    {
      parent: "개발",
      detailList: ["기능 구현", "코드 리뷰", "테스트", "기타"],
    },
    {
      parent: "디자인",
      detailList: ["UI 디자인", "UX 디자인", "기타"],
    },
    {
      parent: "기획",
      detailList: ["기획", "검토", "기타"],
    },
    {
      parent: "마케팅",
      detailList: ["영업", "홍보", "기타"],
    },
  ],
  WorkStatusList: [
    {
      value: "대기",
      label: "대기",
    },
    {
      value: "진행",
      label: "진행",
    },
    {
      value: "완료",
      label: "완료",
    },
    {
      value: "보류",
      label: "보류",
    },
  ],
  callDetailedWorkByParent(parent) {
    let result = [];
    this.detailWorkTypeList.forEach((el) => {
      if (el.parent === parent) {
        el.detailList.forEach((detail) => {
          result.push({
            value: detail,
            label: detail,
          });
        });
      }
    });
    return result;
  },
  indexifyDetail(member) {
    let result = "";
    // member의 departmemnt 와 detail을 합쳐 detailedWorkTypeList에서 찾아 detail의 index를 반환
    this.detailWorkTypeList.forEach((el) => {
      if (el.parent === member.department) {
        el.detailList.forEach((detail, index) => {
          if (detail === member.detail) {
            result = index;
          }
        });
      }
    });
    return result;
  },
  deIndexifyDetailWithMember(member, index) {
    let result = "";
    this.detailWorkTypeList.forEach((el) => {
      if (el.parent === member.department) {
        el.detailList.forEach((detail, i) => {
          if (i === index) {
            result = detail;
          }
        });
      }
    });
    return result;
  },
  deIndexifyDetailWithType(type, index) {
    let result = "";
    this.detailWorkTypeList.forEach((el) => {
      if (el.parent === type) {
        el.detailList.forEach((detail, i) => {
          if (i === index) {
            result = detail;
          }
        });
      }
    });
    return result;
  },
  createWork(project) {
    try {
      project.member.forEach((el, index) => {
        const newWork = {
          index: this.WorkList.length,
          member: el,
          master: project.master,
          project: project.index,
          type: Member.findMemberByIndex(el).department,
          detail: project.work[index],
          deadline: project.end_date,
          update: moment().format("YYYY-MM-DD"),
          status: "진행",
        };
        this.WorkList.push(newWork);
      });
      localStorage.setItem("workList", JSON.stringify(this.WorkList));
    } catch (e) {
      console.log(e);
    }
  },
  getWorkByProjectAndMember(project, memberIndex) {
    try {
      const target = this.WorkList.find((el) => {
        return el.project === project.index && el.member === memberIndex;
      });
      const modifiedTarget = { ...target }; // Create a copy of the target object
      modifiedTarget.detail = this.deIndexifyDetailWithType(
        modifiedTarget.type,
        modifiedTarget.detail
      );
      return modifiedTarget;
    } catch (e) {
      console.log(e);
    }
  },
  getWorkByProject(project) {
    return this.WorkList.filter((el) => el.project === project);
  },
  getWorkByIndex(index) {
    try {
      const target = this.WorkList.find((el) => el.index === index);
      const modifiedTarget = { ...target }; // Create a copy of the target object
      modifiedTarget.detail = this.deIndexifyDetailWithType(
        modifiedTarget.type,
        modifiedTarget.detail
      );
      modifiedTarget.member = Member.findMemberByIndex(
        modifiedTarget.member
      ).name;
      modifiedTarget.master = Member.findMemberByIndex(
        modifiedTarget.master
      ).name;
      return modifiedTarget;
    } catch (e) {
      console.log(e);
    }
  },
  getOriginalWorkByIndex(index) {
    return this.WorkList.find((el) => el.index === index);
  },
  getAllWorkByProject(index) {
    return this.WorkList.filter((el) => el.project === index);
  },
  finishWork(index, desc, etc) {
    const target = this.getOriginalWorkByIndex(index);
    target.status = "완료";
    target.desc = desc;
    target.etc = etc;
    if (
      this.getAllWorkByProject(target.project).find(
        (el) => el.status !== "완료"
      ) === undefined
    ) {
      Project.finishProject(target.project);
    }
    this.refreshWorkList();
  },
  getWorkByMemberAndDetailAndProject(member, detail, project) {
    return this.WorkList.find(
      (el) =>
        el.member === member && el.detail === detail && el.project === project
    );
  },
});
