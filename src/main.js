import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import "./assets/css/tailwind.css";
import "./assets/main.css";
import router from "./routes/route";
import App from "./App.vue";
import gAuthPlugin from "vue3-google-oauth2";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(gAuthPlugin, {
  clientId: import.meta.env.VITE_API_GOOGLE_API_CLIENT_ID,
  scope: "email",
  prompt: "consent",
  fetch_basic_profile: false,
});

app.mount("#app");
