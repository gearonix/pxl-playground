<script setup lang="ts">
import {useStore} from '@/shared/hooks'
import {addDiscToBasket} from '@/widgets/header/model/$basket'
import {createRows} from '@/widgets/price-table/lib/create-rows'
import {Disc} from 'apps/server/src/_prisma-types'
import {reactive} from 'vue'
import {ref} from 'vue'
import {computed} from 'vue'
import {onMounted, watch} from 'vue'

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
      binary-state-sort style="min-height: 500px">
      <template #body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="cost" :props="props">
            {{ props.row.cost }}
          </q-td>
          <q-td key="cusa" :props="props">
            <div class="text-pre-wrap">
              {{ props.row.cusa }}
            </div>
          </q-td>
          <q-td key="amount" :props="props" class="bg-grey-1">
            {{ props.row.amount }}
            <q-popup-edit v-model="props.row.amount"
                          title="Измените количество" buttons v-slot="scope"
                          @save="e => addToBasket(props.row, e)">
              <q-input type="number" v-model="scope.value" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="type" :props="props">
            {{ props.row.type }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
