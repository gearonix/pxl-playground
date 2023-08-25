<script  lang="ts" setup="">
import {useStore} from '@/shared/hooks'
import {transformMysqlDate} from '@/shared/lib/date'
import {$auth} from '@/widgets/signup-form'
import {transformBalanceDifference} from '@/widgets/user-balance/lib'
import {getBalanceChangeColor} from '@/widgets/user-balance/lib'
import {transformBalanceChangeName} from '@/widgets/user-balance/lib'
import {onMounted} from 'vue'
import {watch} from 'vue'
import {getUserBalanceHistoryFx} from './model'
import {$balanceHistory} from './model'

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
    <h3 class="profile-head mb-[10px]">Баланс (руб.)</h3>
    <q-input outlined label="Баланс" dense
             v-model="user.balance" readonly/>

    <h3 class="profile-head mb-[16px]">История операций</h3>
    <h3 class="text-base text-grey-7"
        v-if="balanceHistory.length === 0"
    >Здесь пока-что ничего нет.</h3>

    <q-card
        :class="`p-[-10px] ${getBalanceChangeColor(balanceChange.type)}
        text-white min-h-[60px]
        mb-[20px]`"
        v-for="balanceChange in balanceHistory"
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
