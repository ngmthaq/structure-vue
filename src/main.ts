/**
 * Import packages area
 */
import { createApp } from "vue";
import { createPinia } from "pinia";

/**
 * Import built-in modules | components
 */
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify.plugin";

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
app.use(createPinia());
app.use(router);
app.use(vuetify);

/**
 * Mount application
 */
app.mount("#app");
