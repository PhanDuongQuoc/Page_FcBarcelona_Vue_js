import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PlayerDetail from '../views/PlayerDetail.vue'
import Player from '../views/Player.vue'
import Team from '../views/Team.vue'
import Store from '@/views/Store.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/player/:id', component: PlayerDetail },
  {path:'/player',component:Player},
  {path:'/team',component:Team},
  {path:'/store',component:Store}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
