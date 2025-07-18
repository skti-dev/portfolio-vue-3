import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import { i18n } from "./i18n/index.js";
import "./style.css";

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(i18n).mount("#app");
