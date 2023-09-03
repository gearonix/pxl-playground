<script setup lang="ts">
import {onMounted, watch} from 'vue'
import {useRouter} from 'vue-router'

import {useLoadingBar} from '@/app/auth-guard/hooks/useLoadingBar'
import {RoutePaths} from '@/shared/config/paths'
import {useStore} from '@/shared/hooks'
import {$auth, validateUserFx} from '@/widgets/signup-form'

import {onForbiddenRoute} from './lib/onForbiddenRoute'

const router = useRouter()
const route = router.currentRoute
const user = useStore($auth)
const isPending = useStore(validateUserFx.pending)

onMounted(() => {
  validateUserFx()
})

const viewLoadingBar = useLoadingBar()

watch(
  [user, () => route.value.path, isPending],
  ([{ isAuthorized }, path]) => {
    if (isPending.value) {
      return
    }
    viewLoadingBar()

    const isForbiddenRoute = onForbiddenRoute(isAuthorized, path)
    const isAdmin = user.value.isAdmin

    if (isForbiddenRoute.admin && isAdmin) {
      return router.push({ path: RoutePaths.ADMIN })
    }

    if (isForbiddenRoute.authorized && !isAdmin) {
      return router.push({ path: RoutePaths.MAIN })
    }

    if (isForbiddenRoute.unauthorized) {
      return router.push({ path: RoutePaths.SIGNUP })
    }
  }
)
</script>

<template>
  <slot v-if="!isPending" />
  <q-circular-progress
    v-else
    indeterminate
    rounded
    size="40px"
    color="grey-4"
    class="absolute-center"
  />
</template>
