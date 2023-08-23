<script setup lang="ts">
import {required} from '@/shared/lib/form/validators'
import {useVModel} from 'effector-vue/composition'
import {CreateProduct} from 'server-types'
import {$addProductForm} from './model'

const formValues = useVModel($addProductForm)

const emit = defineEmits<{
  submit: [formValues: CreateProduct]
}>()

const onSubmit = () => {
  emit('submit', formValues.value)
}

</script>

<template>
  <div
    class="max-w-[400px] mt-[30px]">
    <h3 class="text-xl text-neutral-800">Добавить товар</h3>
    <q-form class="full-width mt-[20px]" @submit="onSubmit">
      <q-input
        v-model="formValues.name"
        label="Название"
        hint="Название товара"
        lazy-rules
        :rules="[required('Product name')]" />
      <q-input
        v-model="formValues.cost"
        label="Цена товара"
        fill-mask
        type="number"
        maxlength="12"
        hint="1500 р."
        class="mt-[15px]"
        lazy-rules
        :rules="[required('Цена')]"
      />
      <q-input
          v-model="formValues.type"
          label="Тип товара"
          fill-mask
          maxlength="12"
          class="mt-[15px]"
          lazy-rules
          :rules="[required('Type')]"
      />
      <q-input
          v-model="formValues.cusa"
          label="CUSA"
          fill-mask
          maxlength="12"
          class="mt-[15px]"
          lazy-rules
      />
      <q-btn
        outline
        color="secondary"
        label="Создать товар"
        class="full-width mt-[44px]"
        type="submit" />
    </q-form>
  </div>
</template>
