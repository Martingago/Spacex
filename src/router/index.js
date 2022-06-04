import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'inicio',
    component: function () {
      return import("@/views/Inicio.vue")
    }
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: function () {
      return import("@/views/Contacto.vue")
    }
  },
  {
    path: '/viajes',
    name: 'Viajes',
    component: function () {
      return import("@/views/Viajes.vue")
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
