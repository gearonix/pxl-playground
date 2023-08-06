import { Keys, Values } from '../types/common'

const routes = {
  MAIN: 'MAIN',
  SIGNUP: 'SIGNUP'
} as const

export type AppRoutes = Keys<typeof routes>

export const RoutePaths = {
  [routes.MAIN]: '/',
  [routes.SIGNUP]: '/signup'
} as const

export type RouteUrls = Values<typeof RoutePaths>
