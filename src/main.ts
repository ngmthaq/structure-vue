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

/**
 * Import static files | stylesheets
 */
import "./assets/main.css";

/**
 * Create application
 */
const app = createApp(App);

/**
 * Apply plugins
 */
app.use(createPinia());
app.use(router);

/**
 * Mount application
 */
app.mount("#app");
