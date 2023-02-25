import { createRouter, createWebHistory } from "vue-router";
import Layout from "../../layouts/Layout.vue";
import Home from "../pages/Home.vue";
import Services from "../pages/Services.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Newsletter from "../pages/Newsletter.vue";
import Kidangui from "../pages/Kidangui.vue";
import PageNotFound from "../pages/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      { path: "/", name: "home", component: Home },
      { path: "/services", name: "Services", component: Services },
      { path: "/about", name: "About", component: About },
      { path: "/contact", name: "Contact", component: Contact },
      { path: "/newsletter", name: "Newsletter", component: Newsletter },
      { path: "/kidangui", name: "Kidangui", component: Kidangui },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
