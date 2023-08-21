<script  lang="ts" setup="">

import {useStore} from '@/shared/hooks'
import {createOrderColumns} from '@/widgets/profile-orders/lib'
import {watch} from 'vue'
import {$userOrders} from './model'
import {getUserOrdersFx} from './model'
import {onMounted} from 'vue'
import dayjs from 'dayjs'

onMounted(() => {
  getUserOrdersFx()
})
const userOrders = useStore($userOrders)

const columns = createOrderColumns()


</script>

<template>
  <div class="mt-[45px] p-[0px] max-w-[60%]">
  <q-table
      flat bordered
      :rows="userOrders"
      :columns="columns" binary-state-sort
      row-key="name" style="min-height: 260px">
    <template #body="props">
      <q-tr :props="props">
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
            {{ dayjs(props.row.createdAt).format('DD/MM/YYYY') }}
          </div>
        </q-td>
      </q-tr>
    </template>
  </q-table>
  </div>
</template>
