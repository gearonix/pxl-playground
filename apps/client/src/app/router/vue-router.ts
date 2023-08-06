import { createRouter } from 'vue-router'
import { routes } from './routes.ts'

export const router = createRouter({
  routes,
  history: createWebHashHistory()
}) //
