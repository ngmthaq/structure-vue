/**
 * Import packages area
 */
import { createApp } from "vue";

/**
 * Import built-in modules | components
 */
import App from "./App.vue";
import vuetify from "./plugins/vuetify.plugin";
import pinia from "./plugins/pinia.plugin";
import router from "./plugins/router.plugin";

/**
 * Import static files | stylesheets
 */
import "vuetify/styles";
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
app.use(vuetify);

/**
 * Mount application
 */
app.mount("#app");
