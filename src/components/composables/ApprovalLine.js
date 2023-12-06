import { shallowReactive } from "vue";
import { Approval } from "./Approval";

export const ApprovalLine = shallowReactive({
  SavedLines: [],
  template: {
    index: "",
    name: "",
    lines: [],
  },
});
