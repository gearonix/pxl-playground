import * as process from 'process'

export const serverPort = process.env['SERVER_PORT'] || 6868

export const clientUrl = process.env['CLIENT_URL'] || 'http://localhost:3000'

export const jwtSecret = process.env['JWT_SECRET']

export const isDev = process.env['NODE_ENV'] === 'development'
