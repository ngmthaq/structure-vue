/**
 * Import packages area
 */
import { createApp } from "vue";
import i18NextVue from "i18next-vue";

/**
 * Import built-in modules | components
 */
import App from "./App.vue";
import { pinia } from "./plugins/store.plugin";
import { router } from "./plugins/router.plugin";
import { i18next } from "./plugins/i18n.plugin";
import { FontAwesomeIcon } from "./plugins/theme.plugin";

/**
 * Import static files | stylesheets
 */
import "./assets/scss/index.scss";

/**
 * Create application
 */
const app = createApp(App);

/**
 * Apply plugins
 */
app.use(pinia);
app.use(router);
app.use(i18NextVue, { i18next });
app.component("font-awesome-icon", FontAwesomeIcon);

/**
 * Mount application
 */
app.mount("#app");
