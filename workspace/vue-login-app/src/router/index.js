import { createRouter, createWebHistory } from 'vue-router'

const LoginPage = () => import('../pages/LoginPage.vue')
const DashboardPage = () => import('../pages/DashboardPage.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/dashboard', name: 'dashboard', component: DashboardPage },
  ],
})

export default router