import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { left: 0, top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Victor Amaral — Full-stack Developer', description: 'Produtos digitais completos com Vue.js, NestJS e foco em problemas reais.' } },
    { path: '/projeto/:slug', name: 'project', component: () => import('../views/ProjectView.vue') },
    { path: '/sobre', name: 'about', component: () => import('../views/AboutView.vue'), meta: { title: 'Sobre — Victor Amaral', description: 'Conheça Victor Amaral, desenvolvedor full stack especializado em Vue.js e NestJS.' } },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.afterEach(to => {
  if (!to.meta.title) return
  document.title = to.meta.title
  const description = document.querySelector('meta[name="description"]')
  if (description && to.meta.description) description.setAttribute('content', to.meta.description)
})
export default router
