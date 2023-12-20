import { shallowReactive } from "vue";
import moment from "moment";
import { Member } from "./Member";
import { Alarm } from "./Alarm";

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
    read: false, // true: 읽은 메세지 false: 읽지 않은 메세지
  },
  createMessage(protoItem) {
    if (protoItem.to.length > 1) {
      protoItem.to.forEach((el) => {
        const item = {
          index: this.List.length,
          from: Member.currentMember,
          to: el,
          reference:
            protoItem.reference === ""
              ? []
              : Array.isArray(protoItem.reference)
              ? protoItem.reference
              : [protoItem.reference],
          title: protoItem.title,
          content: protoItem.content,
          update: moment().format("YYYY-MM-DD"),
          status: true,
          read: false,
        };
        Alarm.createAlarm("messageSend", item.from, item.to);
        this.List.push(item);
      });
      this.refreshList();
      return;
    }
    const item = {
      index: this.List.length,
      from: Member.currentMember,
      to: protoItem.to,
      reference:
        protoItem.reference === ""
          ? []
          : Array.isArray(protoItem.reference)
          ? protoItem.reference
          : [protoItem.reference],
      title: protoItem.title,
      content: protoItem.content,
      update: moment().format("YYYY-MM-DD"),
      status: true,
    };
    this.List.push(item);
    Alarm.createAlarm("messageSend", item.from, item.to);
    this.refreshList();
  },
  editMessage(protoMessage, parentIndex, replyCheck = false) {
    const newMessage = {
      index: this.List.length,
      from: Member.currentMember,
      to: protoMessage.to,
      reference:
        protoMessage.reference === ""
          ? []
          : Array.isArray(protoMessage.reference)
          ? protoMessage.reference
          : [protoMessage.reference],
      title: protoMessage.title,
      content: protoMessage.content,
      update: moment().format("YYYY-MM-DD"),
      status: true,
      read: false,
    };
    if (replyCheck) {
      this.filterReplyMessageGroupReply(parentIndex).length > 0
        ? this.addReplyMessageGroup(parentIndex, newMessage.index)
        : this.createReplyMessageGroup(parentIndex, newMessage.index);
    }
    this.List.push(newMessage);
    Alarm.createAlarm("messageSend", newMessage.from, newMessage.to);
    this.refreshList();
  },
  getAllList() {
    let result = [];
    this.List.forEach((el) => {
      if (el.status) {
        let reference = "";
        if (el.reference) {
          el.reference.forEach((el) => {
            reference += Member.findMemberByIndex(el).name + " ,";
          });
        } else {
          reference = [];
        }
        result.push({
          index: el.index,
          from: Member.findMemberByIndex(el.from).name,
          to: Member.findMemberByIndex(el.to).name,
          reference: reference,
          title: el.title,
          content: el.content,
          update: el.update,
          status: el.status,
          read: el.read,
        });
      }
    });
    return result;
  },
  getMessage(member) {
    const memberName = Member.findMemberByIndex(member).name;
    return this.getAllList().filter(
      (el) => el.to === memberName || el.reference.includes(memberName)
    );
  },
  findMessageByIndex(index) {
    return this.getAllList().find((el) => el.index === index);
  },
  findOriginalMessageByIndex(index) {
    return this.List.find((el) => el.index === index);
  },
  deleteMessage(index) {
    const target = this.findMessageByIndex(index);
    target.status = false;
    this.refreshList();
  },
  calculateMessageCountByMessage(index) {
    const target = this.List.find((el) => el.index === index);
    const targetMember = target.to;
    const targetAllMessage = this.List.filter((el) => el.to === targetMember);
    const targetmessage = targetAllMessage.find((el) => el.index === index);
    return `${targetAllMessage.indexOf(targetmessage) + 1}/${
      targetAllMessage.length
    }`;
  },
  referenceCheck(index) {
    const target = this.List.find((el) => el.index === index);
    return target.to === Member.currentMember;
  },
  readMessage(index) {
    const target = this.List.find((el) => el.index === index);
    target.read = true;
    this.refreshList();
  },
  // 아래 코드는 메시지가 답장을 통해서 생성되었을때, 원본과 답장을 그룹화하여 차후 메시지 보기를 할때 원본과 답장을 함께 보여주기 위한 코드입니다.
  ReplyMessageGroup: localStorage.getItem("replyMessageGroup")
    ? JSON.parse(localStorage.getItem("replyMessageGroup"))
    : [],
  refreshGroup() {
    localStorage.setItem(
      "replyMessageGroup",
      JSON.stringify(this.ReplyMessageGroup)
    );
    this.ReplyMessageGroup = JSON.parse(
      localStorage.getItem("replyMessageGroup")
    );
  },
  createReplyMessageGroup(originalMessage, replyMessage) {
    const group = {
      index: this.ReplyMessageGroup.length,
      originalMessage: originalMessage,
      replyMessage: [replyMessage],
      status: true,
    };
    this.ReplyMessageGroup.push(group);
    this.refreshGroup();
  },
  addReplyMessageGroup(originalMessage, replyMessage) {
    let target = this.findGroupByOGIndex(originalMessage);
    if (target === undefined) {
      target = this.filterReplyMessageGroupReply(originalMessage)[0];
    }
    target.replyMessage.push(replyMessage);
    this.refreshGroup();
  },
  findGroupByOGIndex(index) {
    return this.ReplyMessageGroup.find((el) => el.originalMessage === index);
  },
  filterReplyMessageGroupReply(index) {
    return this.ReplyMessageGroup.filter((el) =>
      el.replyMessage.includes(index)
    );
  },
  getReplyChainArray(unknownIndex) {
    const result = [];
    if (this.findGroupByOGIndex(unknownIndex)) {
      const target = this.findGroupByOGIndex(unknownIndex);
      result.push(this.findOriginalMessageByIndex(target.originalMessage));
      target.replyMessage.forEach((el) => {
        result.push(this.findOriginalMessageByIndex(el));
      });
      return result;
    } else if (this.filterReplyMessageGroupReply(unknownIndex).length > 0) {
      const target = this.filterReplyMessageGroupReply(unknownIndex);
      target.forEach((el) => {
        result.push(this.findOriginalMessageByIndex(el.originalMessage));
        el.replyMessage.forEach((el) => {
          result.push(this.findOriginalMessageByIndex(el));
        });
      });
      return result;
    } else {
      return result;
    }
  },
});
