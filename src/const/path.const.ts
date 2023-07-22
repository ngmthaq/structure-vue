import type { RouteRecordRaw } from "vue-router";
import KeyCodeView from "@/views/keycode/KeyCodeView.vue";

export class PathConst {
  public static keycode: Route = {
    path: "/",
    name: "keycode",
    component: KeyCodeView,
    meta: {
      title: "title.keycode",
    },
  };

  public static calc: Route = {
    path: "/calc",
    name: "calc",
    component: KeyCodeView,
    meta: {
      title: "title.keycode",
    },
  };
}

export type Route = RouteRecordRaw;
