import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import vue3GoogleLogin from "vue3-google-login";

import "./assets/css/tailwind.css";
import "./assets/main.css";
import router from "./routes/route";
import App from "./App.vue";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);

app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_API_GOOGLE_API_CLIENT_ID,
});

app.mount("#app");
