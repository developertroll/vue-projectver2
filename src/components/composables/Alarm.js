import { shallowReactive } from "vue";
import { Member } from "./Member";
import moment from "moment";
export const Alarm = shallowReactive({
  List: localStorage.getItem("alarmList")
    ? JSON.parse(localStorage.getItem("alarmList"))
    : [],
  refreshList() {
    localStorage.setItem("alarmList", JSON.stringify(this.List));
    this.List = JSON.parse(localStorage.getItem("alarmList"));
  },
  template: {
    index: "",
    type: "", // project, projectComplete, work, approvalRequest, approvalApproved, message
    from: "",
    to: "",
    status: true, // true: 읽지 않은 알람 false: 읽은 알람
    content: "",
    update: moment().format("YYYY-MM-DD"),
  },
  createAlarm(type, from, to) {
    let content = "";
    let fromName = Member.findMemberByIndex(from).name;
    let toName = Member.findMemberByIndex(to).name;
    switch (type) {
      case "project":
        content = `${fromName}님이 ${toName}님이 포함된 프로젝트를 신청했습니다.`;
        break;
      case "projectComplete":
        content = `작성하신 프로젝트가 완료되었습니다. 확인해주세요.`;
        break;
      case "work":
        content = `${fromName}님이 작업을 완료했습니다. 확인해주세요.`;
        break;
      case "approvalRequest":
        content = `${fromName}님이 결재를 요청했습니다.`;
        break;
      case "approvalApproved":
        content = `${fromName}님이 결재를 승인했습니다.`;
        break;
      case "approvalRejected":
        content = `${fromName}님이 결재를 반려했습니다.`;
        break;
      case "projectApproved":
        content = "작성하신 프로젝트가 승인되었습니다";
        break;
      case "workRejected":
        content = `${fromName}님이 작업을 반려했습니다.`;
        break;
      case "workApproved":
        content = `${fromName}님이 작업을 승인했습니다.`;
        break;
      default:
        content = "알 수 없는 알림입니다.";
        break;
    }
    const alarm = {
      index: this.List.length,
      type: type,
      from: from,
      to: to,
      status: true,
      content: content,
      update: moment().format("YYYY-MM-DD"),
    };
    this.List.push(alarm);
    this.refreshList();
  },
  getListByTypeAndMember(type, member) {
    const target = this.List.filter(
      (el) => el.type.includes(type) && el.to === member
    );
    console.log(target);
    const result = [];
    target.forEach((el) => {
      result.push({
        ...el,
        from: Member.findMemberByIndex(el.from).name,
        to: Member.findMemberByIndex(el.to).name,
      });
    });
    return result;
  },
  readAlarmByIndex(index) {
    const target = this.List.find((el) => el.index === index);
    target.status = false;
    this.refreshList();
  },
  getMinifiedAlarmList(member) {
    const target = this.List.filter(
      (el) => el.to === member && el.status === true
    );
    const result = [
      { type: "project", count: 0 },
      { type: "work", count: 0 },
      { type: "approval", count: 0 },
    ];
    // target 리스트에서 type이 같은 것들의 개수를 세서 result에 넣는다. result는 type과 count를 가진다.
    target.forEach((el) => {
      const index = result.findIndex((element) =>
        el.type.includes(element.type)
      );
      if (index === -1) {
        result.push({
          type: el.type,
          count: 1,
        });
      } else {
        result[index].count++;
      }
    });
    return result;
  },
  readMinifiedAlarmList(type, member) {
    console.log(type, member);
    const target = this.List.filter(
      (el) => el.to === member && el.status === true && el.type.includes(type)
    );
    console.log(target, "타겟");
    target.forEach((el) => {
      el.status = false;
    });
    this.refreshList();
  },
});
