import '../styles/import'

import { LoadingBar, Notify, Quasar } from 'quasar'
import langRu from 'quasar/lang/ru'
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
    },
    lang: langRu
  })

  LoadingBar.setDefaults({
    color: 'primary',
    size: '3px'
  })

  app.use(router)

  app.mount(rootId)
}

bootstrap()
