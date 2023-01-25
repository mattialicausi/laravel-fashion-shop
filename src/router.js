import { createRouter, createWebHistory } from "vue-router";

import CategoryPage from "./pages/CategoryPage.vue";
import SingleProduct from "./pages/SingleProduct.vue";
import NotFound from "./pages/NotFound.vue";
import HomePage from "./pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/category",
      name: "category",
      component: CategoryPage,
    },
    {
      path: "/product/:slug",
      name: "single-product",
      component: SingleProduct,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export { router };
