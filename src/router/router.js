import { createRouter, createWebHistory } from "vue-router";
import Layout from "../../layouts/Layout.vue";
import Home from "../pages/Home.vue";
import Services from "../pages/Services.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import PageNotFound from "../pages/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
        meta: {
          title: "Accueil - Page d'accueil de mon application",
          metaTags: [
            {
              name: "description",
              content: "Page d'accueil de mon application",
            },
            {
              property: "og:description",
              content: "Page d'accueil de mon application",
            },
          ],
        },
      },
      {
        path: "/services",
        name: "Services",
        component: Services,
        meta: {
          title: "Services - L\'enssemble de nos services",
          metaTags: [
            {
              name: "description",
              content: "Page des services de mon application",
            },
            {
              property: "og:description",
              content: "Page des services de mon application",
            },
          ],
        },
      },
      {
        path: "/about",
        name: "About",
        component: About,
        meta: {
          title: "About - En savoir plus sur nous",
          metaTags: [
            {
              name: "description",
              content: "Page about de mon application",
            },
            {
              property: "og:description",
              content: "Page about de mon application",
            },
          ],
        },
      },
      {
        path: "/contact",
        name: "Contact",
        component: Contact,
        meta: {
          title: "Contact - Retrouvez nos contacts",
          metaTags: [
            {
              name: "description",
              content: "Page de contact de mon application",
            },
            {
              property: "og:description",
              content: "Page de contact de mon application",
            },
          ],
        },
      },
      {
        path: "/:pathMatch(.*)*",
        name: "PageNotFound",
        component: PageNotFound,
        meta: {
          title: "Page 404",
          metaTags: [
            {
              name: "description",
              content: "Page non définie",
            },
            {
              property: "og:description",
              content: "Page non définie",
            },
          ],
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Mon application";
  const metaTags = to.meta.metaTags || [];
  metaTags.forEach((tag) => {
    const tagElement = document.createElement("meta");
    Object.keys(tag).forEach((key) => {
      tagElement.setAttribute(key, tag[key]);
    });
    document.head.appendChild(tagElement);
  });
  next();
});

export default router;
