<script  lang="ts" setup="">
import {useVModel} from 'effector-vue/composition'

import {$creationDate,createShipment} from '@/features/create-shipment/model'


const creationDate = useVModel($creationDate)

</script>

<template>
  <h4 class="profile-head">
    Создать отгрузку
  </h4>
  <div class="max-w-[300px] mt-[30px]">
    <q-input
      v-model="creationDate"
      filled
      type="date"
    />
    <q-btn
      color="red"
      outline
      label="Создать"
      class="full-width mt-[44px]"
      type="submit"
      @click="createShipment"
    />
  </div>
</template>
