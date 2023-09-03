import { isDev, serverPort } from '@/common/consts/env'

import { createServer } from './create-server'

export const startServer = async () => {
  const server = createServer({
    logger: !isDev
  })

 try {
    await server.listen({ port: Number(serverPort) })
  } catch (error) {
    server.log.error(error)

    process.exit(1)
  }
}
