<script setup lang="ts">
import {logo} from '@/shared/assets'
import {RoutePaths} from '@/shared/config/paths'
import {useStore} from '@/shared/hooks'
import {$totalAmount} from '@/widgets/header/model/$basket'
import {$basket} from '@/widgets/header/model/$basket'
import {$auth} from '@/widgets/signup-form'
import {Navbar} from '@/entities/navbar'

const basket = useStore($basket)
const totalAmount = useStore($totalAmount)
const auth = useStore($auth)

const createOrder = () => {
  console.log(basket.value)
}


</script>

<template>
  <header
    class="w-full h-[73px] bg-grey-2 shadow-sm flex items-center
    px-[35px] border-grey justify-between px-[70px]">
    <router-link :to="RoutePaths.MAIN">
      <img :src="logo" alt="logo" class="w-[155px] h-[50px] cursor-pointer" />
    </router-link>
    <Navbar/>
    <div class="flex flex-center gap-[45px]">
      <q-btn
          v-if="auth.isAuthorized"
          color="primary"
          outline
          :label="`Сформировать заказ: ${totalAmount} р.`"
          :disable="totalAmount === 0"
          type="submit" size="small" @click="createOrder" class="text-xs bg-grey-1"
      />
      <img class="w-[38px] h-[38px] cursor-pointer
      " src="/default-avatar.png"/>
    </div>
  </header>
</template>

<style scoped></style>
