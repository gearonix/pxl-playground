<script  lang="ts" setup="">

import {useOrdersCount} from '@/entities/user-card/hooks'
import {useChangeBalance} from '@/entities/user-card/hooks'
import {deleteUserFx} from '@/entities/user-card/model'
import {blockUserFx} from '@/entities/user-card/model'
import {User} from 'server/src/_prisma-types'
import {convertPhoneNumber} from '@/shared/lib/helpers'
import {ref} from 'vue'

const { user } = defineProps<{
  user: User
}>()

const userBalance = ref<string>(String(user.balance))

const changeBalance = useChangeBalance(user.userId)

const blockUser = async () => {
  await blockUserFx({
    userId: user.userId
  })
}

const deleteUser = async () => {
  await deleteUserFx({
    userId: user.userId
  })
}


const { ordersCount, discsCount } = useOrdersCount(user)

</script>

<template>
  <div :class="`border-grey w-[100%] min-h-[65px] py-[10px]
  mt-[15px] rounded flex px-[20px] items-center relative gap-[28px]
   ${user.isBlocked ? 'bg-grey-2': 'bg-grey-1'}`">
    <img class="block w-[47px] h-[47px]" src="/default-avatar.png" />
    <div class="w-[150px]">
      <h3 class="text-lg">{{ user.username }} </h3>
      <h3 class="text-sm text-grey-6">{{ convertPhoneNumber(user.phoneNumber) }}</h3>
    </div>
    <div class="absolute text-grey-6 right-[20px] top-[4px]">ID: {{ user.userId }}</div>
    <div class="min-h-[35px] flex gap-[20px]">
      <q-input outlined label="Баланс (руб.)" dense
               v-model="userBalance"
               @blur="() => changeBalance(userBalance)" :readonly="user.isBlocked"/>
      <q-btn push color="white" :text-color="user.isBlocked ? 'deep-orange' : 'red'"
             :label="!user.isBlocked ? 'Заблокировать' : 'Разблокировать'" class="h-[30px]"
             size="sm" @click="blockUser"
      />
      <q-btn push color="white" text-color="red" glossy
             label="Удалить" class="h-[30px]"
             size="sm" @click="deleteUser"
      />
    </div>
    <div class="md:w-[100%] md:flex md:justify-between">
      <h3 class="text-sm text-grey-10">Адрес доставки: {{ user.deliveryAddress || 'Нет' }}</h3>
      <h3 class="text-sm text-grey-7">Кол-во дисков: {{ ordersCount }} </h3>
      <h3 class="text-sm text-grey-7">Кол-во заказов {{ discsCount }}</h3>
    </div>
  </div>
</template>
