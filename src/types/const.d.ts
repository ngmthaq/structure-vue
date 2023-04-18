import type { RouteRecordRaw } from "vue-router";

// api.const.ts
export type ApiFetchMode = "cache" | "no-cache";

// app.const.ts

// format.const.ts

// key.const.ts

// lang.const.ts
export type Locale = {
  lng: string;
  iso639_1: string; // https://www.andiamo.co.uk/resources/iso-language-codes/
};

export type Locales = {
  vi: Locale;
};

// path.const.ts
export type Route = RouteRecordRaw;

export type Routes = {
  home: Route;
  about: Route;
};
