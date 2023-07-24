import type { RouteRecordRaw } from "vue-router";
import KeyCodeView from "@/views/keycode/KeyCodeView.vue";
import CalculatorView from "@/views/calc/CalculatorView.vue";
import BoxShadowView from "@/views/styles/BoxShadowView.vue";

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
    component: CalculatorView,
    meta: {
      title: "title.calc",
    },
  };

  public static boxShadow: Route = {
    path: "/styles/box-shadow",
    name: "boxShadow",
    component: BoxShadowView,
    meta: {
      title: "title.styles.boxShadow",
    },
  };
}

export type Route = RouteRecordRaw;
