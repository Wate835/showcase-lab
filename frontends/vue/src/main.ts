import { createApp } from "vue";
import VueKonva from "vue-konva";
import { bootPrefs } from "@shared/boot.js";
import App from "./App.vue";
import { router } from "./router";
import "./theme.css";
import "@shared/styles.css";

bootPrefs();

createApp(App).use(router).use(VueKonva).mount("#app");
