<script setup lang="ts">

import {createOrder} from '@/features/create-order/model'
import {RoutePaths} from '@/shared/config/paths'
import {useStore} from '@/shared/hooks'
import {$basket} from '@/widgets/header/model/$basket'
import {$auth} from '@/widgets/signup-form'

const user = useStore($auth)
const basket = useStore($basket)

</script>

<template>
  <q-tabs
    no-caps
    active-color="text-dark"
    indicator-color="transparent"
    class="text-grey-8 h-[100%] lg-s1:!hidden md-s1:!flex"
  >
    <router-link :to="RoutePaths.MAIN">
      <q-tab
        name="main"
        label="Главная"
        class="text-dark"
      />
    </router-link>
    <router-link
      v-if="!user.isAdmin"
      :to="RoutePaths.PROFILE"
    >
      <q-tab
        name="profile"
        label="Профиль"
        class="text-dark"
      />
    </router-link>
    <router-link
      v-else
      :to="RoutePaths.ADMIN"
    >
      <q-tab
        name="admin"
        label="Админка"
        class="text-primary"
      />
    </router-link>
    <q-tab
      name="create-order"
      label="Сделать заказ"
      class="text-dark"
      :disable="basket.length === 0"
      @click="createOrder"
    />
  </q-tabs>
</template>

<style scoped>

</style>
