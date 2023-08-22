import '../styles/import'

import { LoadingBar, Notify, Quasar } from 'quasar'
import { createApp } from 'vue'

import { router } from '../router'
import App from './application.vue'

const rootId = '#app'

export const bootstrap = () => {
  const app = createApp(App)

  app.use(Quasar, {
    plugins: {
      LoadingBar,
      Notify
    }
  })

  LoadingBar.setDefaults({
    color: 'primary',
    size: '3px'
  })

  app.use(router)

  app.mount(rootId)
}

bootstrap()
