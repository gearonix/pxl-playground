<script  lang="ts" setup="">
import {createShipment} from '@/features/create-shipment/model'
import {$creationDate} from '@/features/create-shipment/model'
import {useVModel} from 'effector-vue/composition'

const creationDate = useVModel($creationDate)

</script>

<template>
  <h4 class="profile-head">Создать отгрузку</h4>
  <div class="max-w-[300px] mt-[30px]">
    <q-input v-model="creationDate" filled type="date" />
    <q-btn
        color="red"
        outline
        label="Создать"
        class="full-width mt-[44px]"
        @click="createShipment"
        type="submit" />
  </div>
</template>
