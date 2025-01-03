import { createRouter, createWebHistory } from 'vue-router'
const TopPage = () => import('../TopPage.vue')
const ComingSoonPage = () => import('../ComingSoonPage.vue')
const AboutMePage = () => import('../AboutMePage.vue')
//const ArticlePage = () => import('../ArticlesPage.vue')

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
  {
    path: '/aboutme',
    name: 'About Me',
    component: AboutMePage
  },
  /*{
    path: '/articles',
    name: 'Articles',
    component: ArticlePage
  }*/
]


export default createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})