import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import axios from "axios";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
loadFonts();
const app = createApp(App);
app.config.globalProperties.axios = axios;
axios.defaults.withCredentials = true;
app.use(vuetify, components, directives).mount("#app");
