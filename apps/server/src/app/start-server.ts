import { createServer } from './create-server'

export const startServer = async () => {
  const server = createServer({
    logger: true
  })

  try {
    await server.listen({ port: 6868 })
  } catch (error) {
    server.log.error(error)

    process.exit(1)
  }
}
