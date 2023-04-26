import type { RouteRecordRaw } from "vue-router";

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

export type Route = RouteRecordRaw;

export type Routes = {
  home: Route;
};
