import { shallowReactive } from "vue";
import { Member } from "./Member";
import { Approval } from "./Approval";
export const Project = shallowReactive({
  List: localStorage.getItem("projectList")
    ? JSON.parse(localStorage.getItem("projectList"))
    : [],
  template: {
    index: "",
    title: "",
    desc: "",
    start_date: "",
    end_date: "",
    master: "",
    member: [],
    work: [],
    status: "",
  },
  createProject(item) {
    const newProject = {
      ...item,
      index: this.List.length,
      master: Member.currentMember,
      status: "대기",
    };
    this.List.push(newProject);
    Approval.createApproval(newProject);
    localStorage.setItem("projectList", JSON.stringify(this.List));
  },
  EditProject(index, project) {
    const target = this.findProjectByIndex(index);
    const changedProject = Object.assign(target, project);
    changedProject.status = "대기";
    Approval.createApproval(changedProject);
    localStorage.setItem("projectList", JSON.stringify(this.List));
  },
  callProjectList(status) {
    return this.List.filter((el) => el.status === status);
  },
  findProjectByIndex(index) {
    return this.List.find((el) => el.index === index);
  },
  deleteProject(index) {
    const target = this.findProjectByIndex(index);
    target.status = "삭제";
    localStorage.setItem("projectList", JSON.stringify(this.List));
    this.List = JSON.parse(localStorage.getItem("projectList"));
  },
  getProjectByMember(Member) {
    return this.List.filter(
      (el) => el.member.includes(Member) && el.status === "진행"
    );
  },
});
