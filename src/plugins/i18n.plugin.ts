import i18next from "i18next";
import LangConst from "@/const/lang.const";
import { vi } from "@/locales/vi";

i18next.init({
  debug: import.meta.env.DEV,
  resources: { vi },
  lng: LangConst.DEFAULT_LOCALE.lng,
  fallbackLng: LangConst.DEFAULT_LOCALE.lng,
  supportedLngs: Object.values(LangConst.LOCALES).map((l) => l.lng),
  ns: LangConst.DEFAULT_NS,
  defaultNS: LangConst.DEFAULT_NS,
});

function translateWithNS(key: string, ns: string = LangConst.DEFAULT_NS) {
  return i18next.t(key, { ns: ns });
}

async function changeLocale(locale: string) {
  return i18next.changeLanguage(locale);
}

export default i18next;

export { translateWithNS, changeLocale };
