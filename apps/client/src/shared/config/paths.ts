import { Keys }   from '../types/common'
import { Values } from '../types/common'

const routes = {
  MAIN: 'MAIN',
  SIGNUP: 'SIGNUP',
  PROFILE: 'PROFILE',
  ADMIN: 'ADMIN'
} as const

export type AppRoutes = Keys<typeof routes>

export const RoutePaths = {
  [routes.MAIN]: '/',
  [routes.SIGNUP]: '/signup',
  [routes.PROFILE]: '/profile',
  [routes.ADMIN]: '/admin'
} as const

export type RouteUrls = Values<typeof RoutePaths>
