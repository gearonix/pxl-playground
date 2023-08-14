<script setup lang="ts">
import {RoutePaths} from '@/shared/config/paths'
import {useStore} from '@/shared/hooks'
import {$totalAmount} from '@/widgets/header/model/$basket'
import {$basket} from '@/widgets/header/model/$basket'
import {$auth} from '@/widgets/signup-form'

const basket = useStore($basket)
const totalAmount = useStore($totalAmount)
const auth = useStore($auth)

const createOrder = () => {
  console.log(basket.value)
}


</script>

<template>
  <div class="flex flex-center gap-[45px]">
    <q-btn
        v-if="auth.isAuthorized"
        color="primary"
        outline
        :label="`Сформировать заказ: ${totalAmount} р.`"
        :disable="totalAmount === 0"
        type="submit" size="small" @click="createOrder" class="text-xs bg-grey-1"
    />
    <router-link :to="RoutePaths.PROFILE">
    <div class="w-[155px]">
      <img class="w-[38px] h-[38px] cursor-pointer
      " src="/default-avatar.png"/>
    </div>
    </router-link>
  </div>
</template>
