// import vue-router functionality //
import { createRouter, createWebHistory } from 'vue-router'
import BillingPage from '@/pages/billing/BillingPage.vue'
import LoginPage from '@/pages/billing/LoginPage.vue'
import StatisticPage from '@/pages/billing/StatisticPage.vue'
import FinancePage from '@/pages/billing/FinancePage.vue'
import FluidPage from '@/pages/FluidPage.vue'
import MainPage from '@/pages/main/MainPage.vue'

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/billing',
    component: BillingPage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/statistics',
    component: StatisticPage,
  },
  {
    path: '/finance',
    component: FinancePage,
  },
  {
    path: '/fluid',
    component: FluidPage,
  }
]

const router = createRouter({
  history: createWebHistory(), // tell the browser to use built-in mechanism to manage history of your app //
  routes,
})

export default router