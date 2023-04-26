export default class LangConst {
  public static LOCALES: Locales = {
    vi: { lng: "vi", iso639_1: "vi" },
  };

  public static DEFAULT_LOCALE: Locale = this.LOCALES.vi;

  public static DEFAULT_NS: string = "common";
}

export type Locale = {
  lng: string;
  iso639_1: string; // https://www.andiamo.co.uk/resources/iso-language-codes/
};

export type Locales = {
  vi: Locale;
};
