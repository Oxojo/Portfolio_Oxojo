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
    component: TopPage,
    meta: {title: 'Top | Oxojo.dev'}
  },
  {
    path: '/comingsoon',
    name: 'Coming Soon',
    component: ComingSoonPage,
    meta: {title: 'Coming Soon... | Oxojo.dev'}
  },
  {
    path: '/aboutme',
    name: 'About Me',
    component: AboutMePage,
    meta: {title: 'About Me | Oxojo.dev'}
  },
  {
    path: '/articles',
    name: 'Articles',
    component: ArticlePage,
    meta: {title: 'Articles | Oxojo.dev'}
  },
  {
    path: '/works',
    name: 'Works',
    component: WorksPage,
    meta: {title: 'Works | Oxojo.dev'}
  },
  {
    path: '/works/oxojo_dev',
    name: 'Oxojo.dev | Works',
    component: OxojoDevDetails
  }
]
const Title = 'Oxojo.dev'
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})
router.afterEach((to, from) => {
  document.title = to.meta.title || Title
})
export default router