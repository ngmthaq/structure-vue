import type { Routes } from "@/types/const";

export default class PathConst {
  public static PATHS: Routes = {
    home: {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
      meta: {
        title: "Nguyen Manh Thang",
      },
    },
  };
}
