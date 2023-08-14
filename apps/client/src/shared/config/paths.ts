import { Keys, Values } from '../types/common'

const routes = {
  MAIN: 'MAIN',
  SIGNUP: 'SIGNUP',
  PROFILE: 'PROFILE'
} as const

export type AppRoutes = Keys<typeof routes>

export const RoutePaths = {
  [routes.MAIN]: '/',
  [routes.SIGNUP]: '/signup',
  [routes.PROFILE]: '/profile'
} as const

export type RouteUrls = Values<typeof RoutePaths>
