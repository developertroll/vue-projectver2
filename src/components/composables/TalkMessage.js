import { shallowReactive } from "vue";
import { Member } from "./Member";
import moment from "moment";

export const TalkMessage = shallowReactive({
  GroupList: localStorage.getItem("talkGroupList")
    ? JSON.parse(localStorage.getItem("talkGroupList"))
    : [],
  refreshGroupList() {
    localStorage.setItem("talkGroupList", JSON.stringify(this.GroupList));
    this.GroupList = JSON.parse(localStorage.getItem("talkGroupList"));
  },
  MessageList: localStorage.getItem("talkMessageList")
    ? JSON.parse(localStorage.getItem("talkMessageList"))
    : [],
  refreshMessageList() {
    localStorage.setItem("talkMessageList", JSON.stringify(this.MessageList));
    this.MessageList = JSON.parse(localStorage.getItem("talkMessageList"));
  },
  refreshAll() {
    this.refreshGroupList();
    this.refreshMessageList();
  },
  MessageTemplate: {
    index: "",
    parentGroup: "",
    owner: "",
    content: "",
    update: "", // 메세지가 생성된 시간
    status: true, // true: 존재하는 메세지 false: 삭제된 메세지
  },
  GroupTemplate: {
    index: "",
    name: "",
    member: [],
    message: [],
    update: "", // 마지막 메시지가 생성된 시간
    status: true, // true: 존재하는 그룹방, false: 삭제된 그룹방
  },
  // 생성 함수
  createGroup(name, member) {
    const item = {
      index: this.GroupList.length,
      name: name,
      member: member,
      message: [],
      update: moment().format("YYYY-MM-DD"),
      status: true,
    };
    this.GroupList.push(item);
    // 에러를 방지하기 위해 메시지 1개를 임의로 넣어줌
    this.createMessage(item.index, "채팅방이 생성되었습니다");
    this.refreshGroupList();
  },
  createMessage(parentGroup, content) {
    const item = {
      index: this.MessageList.length,
      parentGroup: parentGroup,
      owner: Member.currentMember,
      content: content,
      update: moment().format("YYYY-MM-DD HH:mm:ss"),
      status: true,
    };
    const targetGroup = this.findGroupByIndex(parentGroup);
    targetGroup.update = item.update;
    targetGroup.message.push(item.index);
    this.MessageList.push(item);
    this.refreshAll();
  },
  // 조회 함수
  findGroupByIndex(index) {
    return this.GroupList.find((el) => el.index === index);
  },
  findMessageByIndex(index) {
    return this.MessageList.find((el) => el.index === index);
  },
  findMessageGroupByIndex(index) {
    return this.MessageList.filter((el) => el.parentGroup === index);
  },
  findLastMessageByGroupIndex(index) {
    const target = this.findGroupByIndex(index);
    const lastMessageIndex = target.message[target.message.length - 1];
    return this.findMessageByIndex(lastMessageIndex);
  },
  findGroupByMember(member) {
    return this.GroupList.filter((el) => el.member.includes(member));
  },
  // 번역된 조회 함수
  getGroupByIndex(index) {
    const target = this.findGroupByIndex(index);
    const modifiedTarget = { ...target }; // Create a copy of the target object
    const translatedMember = [];
    modifiedTarget.member.forEach((el) => {
      translatedMember.push(Member.findMemberByIndex(el));
    });
    modifiedTarget.member = translatedMember;
    return modifiedTarget;
  },
});
