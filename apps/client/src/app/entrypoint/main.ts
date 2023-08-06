import { Quasar } from 'quasar'
import { createApp } from 'vue'

import { router } from './../router'
import App from './App.vue'

import './../styles/import'

const rootId = '#app'

export const bootstrap = () => {
  const app = createApp(App)

  app.use(Quasar, {
    plugins: {}
  })
  app.use(router)

  app.mount(rootId)
}

bootstrap()
