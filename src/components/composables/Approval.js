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
    chained: false,
  },
  // 결재가 여러 명을 걸쳐 발생해야 하는 경우 함수를 통해 결재가 여러개 생성되고, 앞 결재가 완료될때 다음 결재자에게 알람이 가고 활성화 되도록 함
  createChainApproval(item, members) {
    let chainApproval = [];
    let firstApproval = {
      index: this.List.length,
      parentIdx: item.parentIdx,
      parentType: item.parentType,
      update: item.update,
      master: members[0],
      status: "결재요청",
      writer: item.writer,
      chained: true,
    };
    chainApproval.push(firstApproval);
    for (let i = 0; i < members.length; i++) {
      if (members[i + 1] !== undefined) {
        let approval = {
          index: this.List.length,
          parentIdx: item.parentIdx,
          parentType: item.parentType,
          update: item.update,
          master: members[i + 1],
          status: "대기",
          writer: members[i],
          chained: true,
        };
        chainApproval.push(approval);
      }
    }
    this.List.push(...chainApproval);
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
    };
    this.List.push(approval);
  },
  solveApproval(item) {
    const target = this.List.find((el) => el.index === item.index);
    target.status = item.status;
    if (target.chained) {
      const nextTarget = this.List.find(
        (el) => el.parentIdx === item.parentIdx && el.writer === target.master
      );
      if (nextTarget !== undefined) {
        nextTarget.status = "결재요청";
      }
    }
  },
});
