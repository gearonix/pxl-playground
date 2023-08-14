<script setup lang="ts">
import { onMounted, watch } from 'vue'

import { TabsPanels } from '@/entities/tabs-panels'
import { useStore } from '@/shared/hooks'

import { createColumns } from '../lib/create-column'
import { $discs, $discType } from '../model/$discs'
import { getAllDiscsFx } from '../model/get-all-discs.fx'

const discType = useStore($discType)
const discs = useStore($discs)

const columns = createColumns()

const getDiscsByType = () => {
  getAllDiscsFx({
    type: discType.value
  })
}

watch(discType, getDiscsByType)

onMounted(getDiscsByType)
</script>

<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Pixel Playground"
      :rows="discs"
      :columns="columns"
      row-key="name"
      binary-state-sort style="min-height: 400px">
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
          <q-td key="amount" :props="props">
            {{ props.row.amount }}
          </q-td>
          <q-td key="type" :props="props">
            {{ props.row.type }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
