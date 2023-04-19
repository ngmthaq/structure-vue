import { createRouter, createWebHistory } from "vue-router";
import { PATHS } from "@/const/path.const";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Object.values(PATHS),
});

router.afterEach((to) => {
  document.title = to.meta.title && typeof to.meta.title === "string" ? to.meta.title : "";
});

export default router;
