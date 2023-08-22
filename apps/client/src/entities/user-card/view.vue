<script  lang="ts" setup="">

import {useOrdersCount} from '@/entities/user-card/hooks'
import {useChangeBalance} from '@/entities/user-card/hooks'
import {blockUserFx} from '@/entities/user-card/model'
import {changeUserBalanceFx} from '@/entities/user-card/model'
import {$userBalance} from '@/entities/user-card/model'
import {useVModel} from 'effector-vue/composition'
import {User} from 'server/src/_prisma-types'
import {convertPhoneNumber} from '@/shared/lib/helpers'
import {computed} from 'vue'
import {ref} from 'vue'

const { user } = defineProps<{
  user: User
}>()

const userBalance = ref<number>(user.balance)

const changeBalance = useChangeBalance(user.userId, userBalance)

const blockUser = async () => {
  await blockUserFx({
    userId: user.userId
  })
}

const { ordersCount, discsCount } = useOrdersCount(user)

</script>

<template>
  <div :class="`border-grey w-[100%] h-[65px]
  mt-[15px] rounded flex px-[20px] items-center relative gap-[28px]
   ${user.isBlocked ? 'bg-grey-2': 'bg-grey-1'}`">
    <img class="block w-[47px] h-[47px]" src="/default-avatar.png" />
    <div class="w-[150px]">
      <h3 class="text-lg">{{ user.username }} </h3>
      <h3 class="text-sm text-grey-6">{{ convertPhoneNumber(user.phoneNumber) }}</h3>
    </div>
    <div class="absolute text-grey-6 right-[20px] top-[4px]">ID: {{ user.userId }}</div>
    <div class="h-[35px] flex gap-[20px]">
      <q-input outlined label="Баланс" dense
               v-model="userBalance" @blur="changeBalance" :readonly="user.isBlocked"/>
      <q-btn push color="white" text-color="red"
             label="Заблокировать" class="h-[30px]"
             size="sm" @click="blockUser" :disabled="user.isBlocked"
      />
    </div>
    <div>
      <h3 class="text-sm text-grey-10">Кол-во дисков: {{ ordersCount }} </h3>
      <h3 class="text-sm text-grey-7">Кол-во заказов {{ discsCount }}</h3>
    </div>
  </div>
</template>
