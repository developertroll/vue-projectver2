import { shallowReactive } from "vue";

export const Work = shallowReactive({
  WorkList: [],
  template: {
    index: "",
    member: "",
    master: "",
    project: "",
    type: "",
    deadline: "",
    update: "",
    status: "",
  },
  WorkTypeList: [
    {
      value: "개발",
      label: "개발",
    },
    {
      value: "디자인",
      label: "디자인",
    },
    {
      value: "기획",
      label: "기획",
    },
    {
      value: "마케팅",
      label: "마케팅",
    },
  ],
  detailWorkTypeList: [
    {
      parent: "개발",
      detailList: ["기능 구현", "코드 리뷰", "테스트", "기타"],
    },
    {
      parent: "디자인",
      detailList: ["UI 디자인", "UX 디자인", "기타"],
    },
    {
      parent: "기획",
      detailList: ["기획", "검토", "기타"],
    },
    {
      parent: "마케팅",
      detailList: ["영업", "홍보", "기타"],
    },
  ],
  WorkStatusList: [
    {
      value: "대기",
      label: "대기",
    },
    {
      value: "진행",
      label: "진행",
    },
    {
      value: "완료",
      label: "완료",
    },
    {
      value: "보류",
      label: "보류",
    },
  ],
  callDetailedWorkByParent(parent) {
    let result = [];
    this.detailWorkTypeList.forEach((el) => {
      if (el.parent === parent) {
        el.detailList.forEach((detail) => {
          result.push({
            value: detail,
            label: detail,
          });
        });
      }
    });
    return result;
  },
  indexifyDetail(member) {
    let result = "";
    // member의 departmemnt 와 detail을 합쳐 detailedWorkTypeList에서 찾아 detail의 index를 반환
    this.detailWorkTypeList.forEach((el) => {
      if (el.parent === member.department) {
        el.detailList.forEach((detail, index) => {
          if (detail === member.detail) {
            result = index;
          }
        });
      }
    });
    return result;
  },
  deIndexifyDetail(member, index) {
    let result = "";
    this.detailWorkTypeList.forEach((el) => {
      if (el.parent === member.department) {
        el.detailList.forEach((detail, i) => {
          if (i === index) {
            result = detail;
          }
        });
      }
    });
    return result;
  },
});
