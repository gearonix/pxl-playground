<script setup lang="ts">
import {CreateOrder} from '@/features/create-order'
import {RoutePaths} from '@/shared/config/paths'
import {useStore} from '@/shared/hooks'
import {logoutFx} from '@/widgets/signup-form'
import {$auth} from '@/widgets/signup-form'

const auth = useStore($auth)

</script>

<template>
  <div class="flex flex-center gap-[45px] md:hidden lg:gap-[17px]
  h-[100%] lg:!justify-end md-s1:!hidden">
   <CreateOrder />
    <router-link :to="RoutePaths.PROFILE">
    <div class="w-[155px] lg:w-max">
      <div v-if="auth.isAuthorized" class="flex gap-[40px]
      items-center lg:!justify-end lg:gap-[16px]">
        <q-icon name="logout" class="text-grey-7"
                size="sm" @click="logoutFx"/>
          <img class="w-[38px] h-[38px] cursor-pointer" src="/default-avatar.png" />
      </div>
    </div>
    </router-link>
  </div>
</template>
