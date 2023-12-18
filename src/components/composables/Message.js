import { shallowReactive } from "vue";
import moment from "moment";
import { Member } from "./Member";

export const Message = shallowReactive({
  List: localStorage.getItem("messageList")
    ? JSON.parse(localStorage.getItem("messageList"))
    : [],
  refreshList() {
    localStorage.setItem("messageList", JSON.stringify(this.List));
    this.List = JSON.parse(localStorage.getItem("messageList"));
  },
  template: {
    index: "",
    from: "",
    to: "",
    reference: "",
    title: "",
    content: "",
    update: moment().format("YYYY-MM-DD"),
    status: true, // true: 존재하는 메세지 false: 삭제된 메세지
  },
  createMessage(protoItem) {
    if (protoItem.to.length > 1) {
      protoItem.to.forEach((el) => {
        const item = {
          index: this.List.length,
          from: Member.currentMember,
          to: el,
          reference: protoItem.reference,
          title: protoItem.title,
          content: protoItem.content,
          update: moment().format("YYYY-MM-DD"),
          status: true,
        };
        this.List.push(item);
      });
      this.refreshList();
      return;
    }
    const item = {
      index: this.List.length,
      from: Member.currentMember,
      to: protoItem.to,
      reference: protoItem.reference,
      title: protoItem.title,
      content: protoItem.content,
      update: moment().format("YYYY-MM-DD"),
      status: true,
    };
    this.List.push(item);
    this.refreshList();
  },
  getAllList() {
    let result = [];
    this.List.forEach((el) => {
      if (el.status) {
        let reference = "";
        el.reference.forEach((el) => {
          reference += Member.findMemberByIndex(el).name + " ,";
        });
        result.push({
          index: el.index,
          from: Member.findMemberByIndex(el.from).name,
          to: Member.findMemberByIndex(el.to).name,
          reference: reference,
          title: el.title,
          content: el.content.ops,
          update: el.update,
        });
      }
    });
    return result;
  },
  getMessage(member) {
    try {
      const target = this.List.filter((el) => el.to === member);
      const result = [];
      target.forEach((el) => {
        if (el.status) {
          let reference = "";
          el.reference.forEach((el) => {
            reference += Member.findMemberByIndex(el).name + " ,";
          });
          result.push({
            index: el.index,
            from: Member.findMemberByIndex(el.from).name,
            to: Member.findMemberByIndex(el.to).name,
            reference: reference,
            title: el.title,
            content: el.content.ops,
            update: el.update,
          });
        }
      });
      return result;
    } catch (e) {
      console.log(e);
    }
  },
  findMessageByIndex(index) {
    return this.getAllList().find((el) => el.index === index);
  },
  deleteMessage(index) {
    const target = this.findMessageByIndex(index);
    target.status = false;
    this.refreshList();
  },
});
