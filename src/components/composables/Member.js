import { shallowReactive } from "vue";

export const Member = shallowReactive({
  List: [
    {
      index: 0,
      name: "김철수",
      email: "FeWater@test.test",
      rank: 0,
      department: 0,
    },
    {
      index: 1,
      name: "이영희",
      email: "zeroFlower@test.test",
      rank: 1,
      department: 0,
    },
    {
      index: 2,
      name: "박영수",
      email: "ZeroWater@test.test",
      rank: 1,
      department: 1,
    },
  ],
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
  CallTeamTree() {
    let list = [];
    // 부서별로 나누고, 각각의 부서 안에서 rank가 높을수록 앞으로 오도록 정렬
    for (const department in this.departmentTranslate) {
      let departmentList = this.List.filter(
        (el) => el.department === Number(department)
      );
      const treeData = {
        label: this.departmentTranslate[department],
        children: [],
      };
      departmentList
        .sort((a, b) => b.rank - a.rank)
        .forEach((el) => {
          const member = {
            label: `${el.name}(${this.rankTranslate[el.rank]})`,
            key: el.index,
          };
          treeData.children.push(member);
        });
      list.push(treeData);
    }
    return list;
  },
  findMemberByIndex(index) {
    return this.callMembers().find((el) => el.index === index);
  },
  currentMember: "김철수",
});
