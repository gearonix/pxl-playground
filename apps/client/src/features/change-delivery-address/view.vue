<script setup lang="ts">

import {useVModel} from 'effector-vue/composition'
import {onMounted,ref} from 'vue'

import {$deliveryAddress,changeDeliveryAddressFx,getDeliveryAddressFx} from '@/features/change-delivery-address/model'


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
    <h3 class="text-xl mt-[35px] mb-[0px] text-grey-8">
      Адрес пункта выдачи СДЭК
    </h3>
    <q-input
      v-model="address"
      label="Изменить пункт выдачи"
      lazy-rules
      @blur="onBlur"
    />
  </div>
</template>
