import * as process from 'process'

export const serverPort = process.env['SERVER_PORT'] || 6868

export const clientUrl = process.env['CLIENT_URL'] || 'http://localhost:3000'

export const jwtSecret = process.env['JWT_SECRET']

export const isDev = process.env['NODE_ENV'] === 'development'

export const serverHost = process.env['SERVER_HOST'] || 'localhost'

export const serverPrefix = process.env['SERVER_PREFIX'] || '/'

export const passengerHost = '127.0.0.1'
