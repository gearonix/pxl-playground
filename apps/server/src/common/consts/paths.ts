const routes = {
  _ROOT: '_ROOT',
  _DOCS: '_DOCS',
  AUTH: 'AUTH',
  DISCS: 'DISCS',
  USERS: 'USERS',
  ORDERS: 'ORDERS',
  ADMIN: 'ADMIN'
} as const

export const RoutePaths = {
  [routes._ROOT]: '/',
  [routes._DOCS]: '/docs',
  [routes.AUTH]: '/auth',
  [routes.DISCS]: '/discs',
  [routes.USERS]: '/users',
  [routes.ORDERS]: '/orders',
  [routes.ADMIN]: '/admin'
} as const

type RouteKeys = keyof typeof RoutePaths

export type RouteUrls = (typeof RoutePaths)[RouteKeys]
