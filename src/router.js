import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import CategoryPage from "./pages/CategoryPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    //rotta modificata (da home a category)
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
      path: "/:pathMatch(.)",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export { router };
