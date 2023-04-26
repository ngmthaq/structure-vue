import type { Locale, Locales } from "@/types/const";

export default class LangConst {
  public static LOCALES: Locales = {
    vi: { lng: "vi", iso639_1: "vi" },
  };

  public static DEFAULT_LOCALE: Locale = this.LOCALES.vi;

  public static DEFAULT_NS: string = "common";
}
