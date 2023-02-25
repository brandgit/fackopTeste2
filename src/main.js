import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Import de notre store
import store from "./store";

import router from "./router/router.js";
const app = createApp(App);

app.use(router);

// Permission pour l'utilisation du store dans notre App
app.use(store);

app.mount("#app");
