import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: '/my-properties/all',
          name: 'propertiesIndex',
          component: () => import('@/views/properties/PropertiesIndex.vue'),
        },
        {
          path: '/my-properties/add',
          name: 'propertiesAdd',
          component: () => import('@/views/properties/PropertiesAdd.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/AboutView.vue'),
        },
      ],
    },
  ],
})

export default router
