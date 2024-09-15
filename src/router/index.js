import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import( '../views/Home.vue')
  }
]

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {top: 0};
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active-link",
  routes
})

export default router
