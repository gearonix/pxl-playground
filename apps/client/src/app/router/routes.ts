import { Main } from '@/pages/Main'
import { Signup } from '@/pages/Signup'
import { RoutePaths, RouteUrls } from '@/shared/config/paths'

interface Route {
  path: RouteUrls
  component: any
}

export const routes: Route[] = [
  {
    path: RoutePaths.MAIN,
    component: Main
  },
  {
    path: RoutePaths.SIGNUP,
    component: Signup
  }
]
