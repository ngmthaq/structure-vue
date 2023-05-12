import { createApp } from "vue";
import i18NextVue from "i18next-vue";
import { pinia } from "./plugins/store.plugin";
import { router } from "./plugins/router.plugin";
import { i18next } from "./plugins/i18n.plugin";
import { FontAwesomeIcon } from "./plugins/theme.plugin";
import App from "./App.vue";
import "./assets/scss/index.scss";

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(i18NextVue, { i18next });
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
