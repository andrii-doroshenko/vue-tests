import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "@/views/HomePage.vue";
import DraggPageVue from "@/views/DraggPage.vue";

const routes = [
  { path: "/", component: HomePageVue },
  { path: "/draggpage", component: DraggPageVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
