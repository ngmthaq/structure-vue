import i18next from "i18next";
import { DEFAULT_LOCALE, DEFAULT_NS, LOCALES } from "@/const/lang.const";
import { vi } from "@/locales/vi";

i18next.init({
  debug: import.meta.env.DEV,
  resources: { vi },
  lng: DEFAULT_LOCALE.lng,
  fallbackLng: DEFAULT_LOCALE.lng,
  supportedLngs: Object.values(LOCALES).map((l) => l.lng),
  ns: DEFAULT_NS,
  defaultNS: DEFAULT_NS
});

function translateWithNS(key: string, ns: string = DEFAULT_NS) {
  return i18next.t(key, { ns: ns });
}

async function changeLocale(locale: string) {
  return i18next.changeLanguage(locale);
}

export default i18next;

export { translateWithNS, changeLocale };
