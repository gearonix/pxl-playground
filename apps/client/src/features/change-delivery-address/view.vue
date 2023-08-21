<script setup lang="ts">

import {$deliveryAddress} from '@/features/change-delivery-address/model'
import {useVModel} from 'effector-vue/composition'
import {onMounted} from 'vue'
import {ref} from 'vue'
import {getDeliveryAddressFx, changeDeliveryAddressFx} from '@/features/change-delivery-address/model'

const address = useVModel($deliveryAddress)

onMounted(() => {
  getDeliveryAddressFx()
})

const onBlur = () => {
  changeDeliveryAddressFx(address.value)
}

</script>
<template>
  <div class="max-w-[250px] mt-40px">
    <h3 class="text-xl mt-[35px] mb-[0px] text-grey-8">Адрес доставки</h3>
    <q-input
        v-model="address"
        label="Изменить адрес доставки"
        lazy-rules
        @blur="onBlur"
    />
  </div>
</template>
