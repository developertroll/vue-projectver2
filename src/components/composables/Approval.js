import { shallowReactive } from "vue";

export const Approval = shallowReactive({
  List: [],
  template: {
    index: "",
    parentIdx: "",
    parentType: "",
    update: "",
    master: "",
    status: "",
    writer: "",
    parentApprovalIndex: "",
  },
  createApproval(item) {
    const approval = {
      index: this.List.length,
      parentIdx: item.parentIdx,
      parentType: item.parentType,
      update: item.update,
      master: item.master,
      status: "결재요청",
      writer: item.writer,
      parentApprovalIndex: item.parentApprovalIndex
        ? item.parentApprovalIndex
        : null,
    };
    this.List.push(approval);
  },
  finishApproval(index) {
    const target = this.List.find((el) => el.index === index);
    target.status = "결재완료";
  },
  createWaitingApproval(item) {
    this.createApproval(item);
    this.List[this.List.length - 1].status = "대기";
  },
  callApprovalList() {
    return this.List.filter((el) => el.status !== "대기");
  },
});
