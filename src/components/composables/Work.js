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
});
