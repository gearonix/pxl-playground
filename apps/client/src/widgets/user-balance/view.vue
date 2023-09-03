<script  lang="ts" setup="">
import {onMounted,watch} from 'vue'

import {useStore} from '@/shared/hooks'
import {transformMysqlDate} from '@/shared/lib/date'
import {$auth} from '@/widgets/signup-form'
import {getBalanceChangeColor,transformBalanceChangeName,transformBalanceDifference} from '@/widgets/user-balance/lib'

import {$balanceHistory,getUserBalanceHistoryFx} from './model'


const user = useStore($auth)
const balanceHistory = useStore($balanceHistory)

watch(balanceHistory, (data) => {
  console.log(data)
})

onMounted(() => {
  getUserBalanceHistoryFx()
})

</script>

<template>
  <div class="max-w-[300px]">
    <h3 class="profile-head mb-[10px]">
      Баланс (руб.)
    </h3>
    <q-input
      v-model="user.balance"
      outlined
      label="Баланс"
      dense
      readonly
    />

    <h3 class="profile-head mb-[16px]">
      История операций
    </h3>
    <h3
      v-if="balanceHistory.length === 0"
      class="text-base text-grey-7"
    >
      Здесь пока-что ничего нет.
    </h3>

    <q-card
      v-for="balanceChange in balanceHistory"
      :class="`p-[-10px] ${getBalanceChangeColor(balanceChange.type)}
        text-white min-h-[60px]
        mb-[20px]`"
    >
      <q-card-section>
        <div class="text-base">
          {{ transformBalanceChangeName(balanceChange.type) }}
        </div>
        <div class="text-sm">
          {{ transformBalanceDifference(balanceChange.difference) }} руб.
        </div>
        <div class="text-xs mt-[3px]">
          Дата: {{ transformMysqlDate(balanceChange.createdAt) }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
