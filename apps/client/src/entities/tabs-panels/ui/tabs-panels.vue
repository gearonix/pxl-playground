<script setup>
import { ref, watch } from 'vue'

import { useStore } from '@/shared/hooks'
import { $discType, setDiscType } from '@/widgets/price-table/model/$discs'

import { discTypes } from '../lib'

const disc = useStore($discType)

const tab = ref(disc.value)

watch(tab, (tab) => {
  setDiscType(tab)
})
</script>
<template>
  <div class="q-pa-md mb-[-20px]">
    <div class="q-gutter-y-md"
style="max-width: 400px">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator>
          <q-tab v-for="tab in discTypes"
:name="tab" :label="tab" />
        </q-tabs>
        <q-separator />
      </q-card>
    </div>
  </div>
</template>
