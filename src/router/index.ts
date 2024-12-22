import { createRouter, createWebHistory } from 'vue-router'
const TopPage = () => import('../TopPage.vue')
const ComingSoonPage = () => import('../ComingSoonPage.vue')

export const routes = [
  {
    path: '/',
    name: 'Top',
    component: TopPage
  },
  {
    path: '/comingsoon',
    name: 'Coming Soon',
    component: ComingSoonPage
  },
]


export default createRouter({
  history: createWebHistory(),
  routes
})