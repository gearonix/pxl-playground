import './app/load-env'

import { startServer } from '@/app/start-server'

if (typeof PhusionPassenger !== 'undefined') {
  PhusionPassenger.configure({ autoInstall: false })
}

startServer()
