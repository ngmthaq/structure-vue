import type { RouteRecordRaw } from "vue-router";

export default class PathConst {
  public static home: Route = {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: "Homepage",
    },
  };
}

export type Route = RouteRecordRaw;
