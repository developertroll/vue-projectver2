import { shallowReactive } from "vue";
import { Work } from "./Work";

export const Project = shallowReactive({
  List: [],
  template: {
    index: "",
    title: "",
    desc: "",
    start_date: "",
    end_date: "",
    master: "",
    members: [],
  },
  createProject(item) {
    this.List.push(item);
  },
});
