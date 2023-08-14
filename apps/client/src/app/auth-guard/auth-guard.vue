<script setup lang="ts">
import {useLoadingBar} from '@/app/auth-guard/hooks/useLoadingBar'
import {RoutePaths} from '@/shared/config/paths'
import {useStore} from '@/shared/hooks'
import {$auth, validateUserFx} from '@/widgets/signup-form'
import {onMounted, watch} from 'vue'
import {useRouter} from 'vue-router'
import {onForbiddenRoute} from './lib/onForbiddenRoute'

const router = useRouter()
const route = router.currentRoute
const store = useStore($auth)
const isPending = useStore(validateUserFx.pending)

onMounted(() => {
  validateUserFx()
})

useLoadingBar()

watch(
  [store, () => route.value.path, isPending],
  ([{ isAuthorized }, path]) => {
    if (isPending.value) {
      return
    }

    const isForbiddenRoute = onForbiddenRoute(isAuthorized, path)
    if (isForbiddenRoute.authorized) {
      router.push({ path: RoutePaths.MAIN })
    }

    if (isForbiddenRoute.unauthorized) {
      router.push({ path: RoutePaths.SIGNUP })
    }
  }
)
</script>

<template>
  <slot />
</template>
