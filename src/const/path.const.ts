import type { Routes } from "@/types/const";
import AboutViewVue from "@/views/AboutView.vue";
import HomeViewVue from "@/views/HomeView.vue";

export const routes: Routes = {
  home: {
    path: "/",
    name: "home",
    component: HomeViewVue,
    meta: {
      title: "Homepage"
    }
  },
  about: {
    path: "/about",
    name: "about",
    component: AboutViewVue,
    meta: {
      title: "About us"
    }
  }
};
