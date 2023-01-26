import { createRouter, createWebHistory } from "vue-router";

import CategoryPage from "./pages/CategoryPage.vue";
import SingleProduct from "./pages/SingleProduct.vue";
import NotFound from "./pages/NotFound.vue";
import HomePage from "./pages/HomePage.vue";


import RossettiCategoryPage from './pages/categories/RossettiCategoryPage.vue';
import EyeshadowCategoryPage from './pages/categories/EyeshadowCategory.vue';
import BronzerCategoryPage from './pages/categories/BronzerCategory.vue';
import BlushCategoryPage from './pages/categories/BlushCategory.vue';
import MascaraCategoryPage from './pages/categories/MascaraCategory.vue';
import FundationCategoryPage from './pages/categories/FundationCategory.vue';

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

    // percorsi per categorie in navbar
    {
      path: "/categories/lipstick",
      name: "rossetti-category",
      component: RossettiCategoryPage,
    },

    {
      path: "/categories/eyeshadow",
      name: "eyeshadow-category",
      component: EyeshadowCategoryPage,
    },

    {
      path: "/categories/bronzer",
      name: "bronzer-category",
      component: BronzerCategoryPage,
    },

    {
      path: "/categories/blush",
      name: "blush-category",
      component: BlushCategoryPage,
    },

    {
      path: "/categories/mascara",
      name: "mascara-category",
      component: MascaraCategoryPage,
    },

    {
      path: "/categories/fundation",
      name: "fundation-category",
      component: FundationCategoryPage,
    },


    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export { router };
