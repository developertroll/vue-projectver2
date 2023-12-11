import { reactive } from "vue";
import { Member } from "./Member";
export const ApprovalLine = reactive({
  SavedLines: localStorage.getItem("approvalLine")
    ? JSON.parse(localStorage.getItem("approvalLine"))
    : [],
  template: {
    index: "",
    name: "",
    lines: [],
  },
  saveLine(Array, title) {
    let resultLines = [];
    Array.forEach((el) => {
      resultLines.push(el.index);
    });
    const line = {
      index: this.SavedLines.length,
      name: title,
      lines: resultLines,
    };
    this.SavedLines.push(line);
    localStorage.setItem("approvalLine", JSON.stringify(this.SavedLines));
  },
  callLine(index) {
    let resultLines = [];
    const target = this.SavedLines.find((el) => el.index === index);
    target.lines.forEach((el) => {
      resultLines.push(Member.findMemberByIndex(el));
    });
    return resultLines;
  },
  callSelectMenu() {
    let result = [];
    this.SavedLines.forEach((el) => {
      result.push({
        value: el.index,
        label: el.name,
      });
    });
    return result;
  },
});
