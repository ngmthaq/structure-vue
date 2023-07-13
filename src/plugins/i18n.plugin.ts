import { createI18n } from "vue-i18n";
import { LangConst } from "../const/lang.const";
import { ja } from "../locales/ja";

const i18n = createI18n({
  legacy: false,
  locale: LangConst.DEFAULT_LOCALE.lng,
  fallbackLocale: LangConst.DEFAULT_LOCALE.lng,
  messages: {
    ja,
  },
});

export { i18n };
