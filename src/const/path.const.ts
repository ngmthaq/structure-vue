import type { Routes } from "@/types/const";
import HomeViewVue from "@/views/HomeView.vue";

export default class PathConst {
  public static PATHS: Routes = {
    home: {
      path: "/",
      name: "home",
      component: HomeViewVue,
      meta: {
        title: "Nguyen Manh Thang",
      },
    },
  };
}
