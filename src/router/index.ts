import { createRouter, createWebHistory } from 'vue-router'
const TopPage = () => import('../TopPage.vue')
const ComingSoonPage = () => import('../ComingSoonPage.vue')
const AboutMePage = () => import('../AboutMePage.vue')
const ArticlePage = () => import('../ArticlesPage.vue')
const WorksPage = () => import('../WorksPage.vue')
const OxojoDevDetails = () => import('../components/Oxojo.devDetails.vue')

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
  {
    path: '/articles',
    name: 'Articles',
    component: ArticlePage
  },
  {
    path: '/works',
    name: 'Works',
    component: WorksPage
  },
  {
    path: '/works/01',
    name: 'Oxojo.dev | Works',
    component: OxojoDevDetails
  }
]


export default createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})