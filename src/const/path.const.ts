import type { Routes } from "@/types/const";
import HomeViewVue from "@/views/HomeView.vue";

export const PATHS: Routes = {
  home: {
    path: "/",
    name: "home",
    component: HomeViewVue,
    meta: {
      title: "Homepage",
    },
  },
};
