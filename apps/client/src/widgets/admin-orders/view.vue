<script  lang="ts" setup="">

import {useStore} from '@/shared/hooks'
import {transformMysqlDate} from '@/shared/lib/date'
import {getAdminOrdersFx} from '@/widgets/admin-orders/model'
import {$adminOrders} from '@/widgets/admin-orders/model'
import {convertPhoneNumber} from '@/shared/lib/helpers'
import {createOrderColumns} from './lib'
import dayjs from 'dayjs'
import {watch} from 'vue'
import {onMounted} from 'vue'

const adminOrders = useStore($adminOrders)

onMounted(() => {
  getAdminOrdersFx()
})

watch(adminOrders, (adminOrders) => {
  console.log(adminOrders)
})

const columns = createOrderColumns()


</script>

<template>
  <h3 class="profile-head">Заказы</h3>

  <div class="mt-[25px] p-[0px] max-w-[771px]" v-for="shipment in adminOrders">
    <h4 class="text-xl text-grey-10">Отгрузка {{ shipment.id }}</h4>
    <h4 class="text-sm text-grey-9 mt-[20px]">Начало: {{ transformMysqlDate(shipment.startDate) }}</h4>
    <h4 class="text-sm text-grey-9">Конец: {{ transformMysqlDate(shipment.endDate) }}</h4>
    <h4 class="text-xl text-grey-10 my-[12px]">Список заказов:</h4>
    <q-table
        flat bordered
        :rows="shipment.orders"
        :columns="columns" binary-state-sort
        row-key="name" style="min-height: 260px"
        class="mt-[20px]"
    >
      <template #body="props">
        <q-tr :props="props">
          <q-td key="createdBy" :props="props">
            {{ props.row.createdBy }}
          </q-td>
          <q-td key="phone" :props="props">
            {{ convertPhoneNumber(props.row.user.phoneNumber) }}
          </q-td>
          <q-td key="orderId" :props="props">
            {{ props.row.orderId }}
          </q-td>
          <q-td key="totalAmount" :props="props">
            {{ props.row.totalAmount }}
          </q-td>
          <q-td key="status" :props="props">
            <div class="text-pre-wrap">
              {{ props.row.status }}
            </div>
          </q-td>
          <q-td key="createdAt" :props="props">
            <div class="text-pre-wrap">
              {{ transformMysqlDate(props.row.createdAt) }}
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
