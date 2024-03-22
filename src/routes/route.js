import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "@/views/HomePage.vue";
import DraggPageVue from "@/views/DraggPage.vue";
import LoginViewVue from "@/views/LoginView.vue";
import TestPage from "@/views/TestPage.vue";

const routes = [
  { path: "/", component: HomePageVue },
  { path: "/draggpage", component: DraggPageVue },
  { path: "/login", component: LoginViewVue },
  { path: "/test", component: TestPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
