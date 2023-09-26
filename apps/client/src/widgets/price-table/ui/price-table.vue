<script setup lang="ts">
import {Disc} from 'apps/server/src/_prisma-types'
import {computed,onMounted, reactive,ref,watch} from 'vue'

import {useStore} from '@/shared/hooks'
import {addDiscToBasket} from '@/widgets/header/model/$basket'
import {createRows} from '@/widgets/price-table/lib/create-rows'

import {createColumns} from '../lib/create-column'
import {$discs, $discType} from '../model/$discs'
import {getAllDiscsFx} from '../model/get-all-discs.fx'

const discType = useStore($discType)
const discs = useStore($discs)

const discsWithAmount = ref([])

const columns = createColumns()

const getDiscsByType = () => {
  getAllDiscsFx({
    type: discType.value
  })
}

watch(discType, getDiscsByType)
watch(discs, (newDiscs) => {
  discsWithAmount.value = createRows(newDiscs)
})


onMounted(getDiscsByType)

const addToBasket = (disc: Disc, amount: string) => {
  addDiscToBasket({
    id: disc.id,
    cost: disc.cost,
    amount: Number(amount)
  })
}



</script>

<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Pixel Playground"
      :rows="discsWithAmount"
      :columns="columns"
      row-key="name"
      binary-state-sort
      class="min-h-[500px] mt-[20px]"
      virtual-scroll
      no-data-label="Нет заказов"
      hide-pagination
      rows-per-page-options="0"
    >
      <template #body="props">
        <q-tr :props="props">
          <q-td
            key="name"
            :props="props"
          >
            {{ props.row.name }}
          </q-td>
          <q-td
            key="cost"
            :props="props"
          >
            {{ props.row.cost }}
          </q-td>
          <q-td
              key="amount"
              :props="props"
              class="bg-grey-1 w-[175px]"
          >
            <q-input
                v-model="props.row.amount"
                type="number"
                class="w-[100%]"
                dense
                autofocus
                @blur="(e) => addDiscToBasket(props.row, e.target.value)"
            />
          </q-td>
          <q-td
            key="cusa"
            :props="props"
          >
            <div class="text-pre-wrap">
              {{ props.row.cusa }}
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
