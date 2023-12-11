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
  callProjectList() {
    return this.List;
  },
  findProjectByIndex(index) {
    return this.List.find((el) => el.index === index);
  },
});
