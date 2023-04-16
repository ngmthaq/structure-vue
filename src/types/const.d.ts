import type { RouteRecordRaw } from "vue-router";

// api.const.ts
export type ApiFetchMode = "cache" | "no-cache";

// app.const.ts

// format.const.ts

// key.const.ts

// lang.const.ts

// path.const.ts
export type Route = RouteRecordRaw;

export type Routes = {
  home: Route;
  about: Route;
};
