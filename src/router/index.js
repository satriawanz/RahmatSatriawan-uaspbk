import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Jadwal from '../views/Jadwal.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/jadwal', name: 'Jadwal', component: Jadwal } 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router