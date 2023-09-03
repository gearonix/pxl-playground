<script setup lang="ts">
import {useVModel} from 'effector-vue/composition'
import {CreateUserEntry} from 'server-types'

import {min, required} from '@/shared/lib/form/validators'

import {$createUserForm} from './model'

const formValues = useVModel($createUserForm)

const props = defineProps<{
  error: string
}>()


const emit = defineEmits<{
  submit: [formValues: CreateUserEntry]
}>()

const onSubmit = () => {
  emit('submit', formValues.value)
}
</script>

<template>
  <div
    class="max-w-[400px] mt-[30px]"
  >
    <h3 class="text-xl text-neutral-800">
      Создать пользователя
    </h3>
    <q-form
      class="full-width mt-[40px]"
      @submit="onSubmit"
    >
      <q-input
        v-model="formValues.phoneNumber"
        label="Телефон"
        mask="+# (###) ###  ####"
        fill-mask
        hint="+7 926 100 1000"
        lazy-rules
        :rules="[required('Phone')]"
      />
      <q-input
        v-model="formValues.username"
        label="Имя пользователя"
        fill-mask
        maxlength="12"
        hint="Enter your password"
        class="mt-[15px]"
        lazy-rules
        :rules="[required('Username')]"
        :error="Boolean(props.error)"
        :error-message="props.error"
      />
      <q-btn
        text-color="primary"
        outline
        label="Создать"
        class="full-width mt-[44px]"
        type="submit"
      />
    </q-form>
  </div>
</template>
