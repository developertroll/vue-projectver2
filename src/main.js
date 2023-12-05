import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import ko from "element-plus/dist/locale/ko.mjs";
import "element-plus/dist/index.css";
import "@/style/main.css";
const app = createApp(App);
app.use(ElementPlus, { locale: ko });
app.mount("#app");
