import type { RouteRecordRaw } from "vue-router";
import KeyCodeView from "@/views/keycode/KeyCodeView.vue";

export class PathConst {
  public static home: Route = {
    path: "/",
    name: "home",
    component: KeyCodeView,
    meta: {
      title: "title.keycode",
    },
  };
}

export type Route = RouteRecordRaw;
