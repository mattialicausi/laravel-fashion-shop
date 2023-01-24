import { createRouter, createWebHistory } from 'vue-router';

import CategoryPage from './pages/CategoryPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'product',
            component: CategoryPage
        },
    ]
});

export { router };