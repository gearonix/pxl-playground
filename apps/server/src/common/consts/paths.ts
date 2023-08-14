const routes = {
  _ROOT: '_ROOT',
  _DOCS: '_DOCS',
  AUTH: 'AUTH',
  DISCS: 'DISCS'
} as const

export const RoutePaths = {
  [routes._ROOT]: '/',
  [routes._DOCS]: '/docs',
  [routes.AUTH]: '/auth',
  [routes.DISCS]: '/discs'
} as const

type RouteKeys = keyof typeof RoutePaths

export type RouteUrls = (typeof RoutePaths)[RouteKeys]
