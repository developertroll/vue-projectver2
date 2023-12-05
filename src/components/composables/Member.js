import { shallowReactive } from "vue";

export const Member = shallowReactive({
  List: [],
  template: {
    index: "",
    name: "",
    email: "",
    rank: "",
    department: "",
  },
  rankTranslate: {
    0: "사원",
    1: "대리",
    2: "과장",
    3: "차장",
    4: "부장",
    5: "사장",
  },
  departmentTranslate: {
    0: "개발",
    1: "디자인",
    2: "기획",
    3: "마케팅",
  },
  // List를 부르되 rank, department를 번역해서 부름
  callMembers() {
    let list = [];
    this.List.forEach((el) => {
      let member = {
        index: el.index,
        name: el.name,
        email: el.email,
        rank: this.rankTranslate[el.rank],
        department: this.departmentTranslate[el.department],
      };
      list.push(member);
    });
    return list;
  },
  callTransferMember() {
    let list = [];
    this.List.forEach((el) => {
      let member = {
        label: `${el.name}(${this.departmentTranslate[el.department]})`,
        key: el.index,
      };
      list.push(member);
    });
    return list;
  },
});
