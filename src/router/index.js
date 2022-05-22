import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import("@/App.vue")
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
