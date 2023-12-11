import { shallowReactive } from "vue";

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
  // createApproval(item) {
  //   const approval = {
  //     index: this.List.length,
  //     parentIdx: item.parentIdx,
  //     parentType: item.parentType,
  //     update: item.update,
  //     master: item.master,
  //     status: "결재요청",
  //     writer: item.writer,
  //     parentApprovalIndex: item.parentApprovalIndex
  //       ? item.parentApprovalIndex
  //       : null,
  //   };
  //   this.List.push(approval);
  // },
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
          };
          this.List.push(approval);
          continue;
        }
        // 0 1 2
        const approval = {
          index: this.List.length,
          parentIdx: project.index,
          parentType: "project",
          title: project.title,
          master: project.ApprovalLine[i].index,
          status: "대기",
          writer: project.ApprovalLine[i - 1].index,
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
      };
      this.List.push(approval);
    }
    localStorage.setItem("approvalList", JSON.stringify(this.List));
  },
  finishApproval(index) {
    const target = this.List.find((el) => el.index === index);
    target.status = "결재완료";
    if (
      this.List.find(
        (el) => target.master === el.writer && el.parentIdx === target.parentIdx
      ) !== undefined
    ) {
      // 다음 결재가 대기에서 결재요청 상태로 바뀜
      const nextApproval = this.List.find(
        (el) => target.master === el.writer && el.parentIdx === target.parentIdx
      );
      nextApproval.status = "결재요청";
    }
  },
  callApprovalList() {
    return this.List.filter((el) => el.status !== "대기");
  },
  callAllList() {
    return this.List;
  },
});
