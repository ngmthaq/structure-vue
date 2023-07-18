export class LangConst {
  public static LOCALES: Locales = {
    en: { lng: "en", iso: "en-us" },
  };

  public static DEFAULT_LOCALE: Locale = this.LOCALES.en;

  public static DEFAULT_NS: string = "common";
}

export type Locale = {
  lng: string;
  iso: string; // https://www.andiamo.co.uk/resources/iso-language-codes/
};

export type Locales = {
  en: Locale;
};
