import '../styles/import'
import { fork } from 'effector'
import { VueSSRPlugin } from 'effector-vue/ssr'
import { Quasar } from 'quasar'
import { createApp } from 'vue'
import { router } from '../router'
import App from './application.vue'

const rootId = '#app'

export const bootstrap = () => {
  const app = createApp(App)

  app.use(Quasar, {
    plugins: {}
  })
  app.use(router)

  const scope = fork()

  app.use(
    VueSSRPlugin({
      scope,
      scopeName: 'app-scope-name'
    })
  )

  app.mount(rootId)
}

bootstrap()
