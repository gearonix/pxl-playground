import { defineServerPath } from '@/app/lib'
import {isDev, passengerHost, serverPort} from '@/common/consts/env'

import { createServer } from './create-server'

export const startServer = async () => {
  const server = createServer({
    logger: isDev
  })

  try {
    const serverPath = defineServerPath()

    await server.listen({
      port: Number(serverPort),
      path: serverPath,
      host: passengerHost
    })
  } catch (error) {
    server.log.error(error)

    process.exit(1)
  }
}
