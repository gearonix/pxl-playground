import { FastifyInstance } from 'fastify'

export class Service {
  server: FastifyInstance
  constructor(server: FastifyInstance) {
    this.server = server
  }
}
