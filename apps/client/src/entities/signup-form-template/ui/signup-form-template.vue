<script setup lang="ts">
import { useVModel } from 'effector-vue/composition'
import { min, required } from '@/shared/lib/form/validators'
import { SignupFormValues } from '@/widgets/signup-form'
import { $signupForm } from '../model.ts'

const formValues = useVModel($signupForm)

const emit = defineEmits<{
  submit: [formValues: SignupFormValues]
}>()

const props = defineProps<{
  errorMessage: string
}>()

const onSubmit = () => {
  emit('submit', formValues.value)
}
</script>

<template>
  <div
    class="w-[365px] h-[510px] rounded-md drop-shadow-md px-[35px] pt-[30px] bg-grey-2 mt-[40px] m-center">
    <h3 class="text-xl font-bold text-neutral-800">Добро пожаловать!</h3>
    <q-form class="full-width mt-[40px]" @submit="onSubmit">
      <q-input
        v-model="formValues.phone"
        label="Телефон"
        mask="+# (###) ###  ####"
        fill-mask
        hint="+7 926 100 1000"
        lazy-rules
        :rules="[required('Phone')]" />
      <q-input
        v-model="formValues.password"
        label="Пароль"
        fill-mask
        type="password"
        maxlength="12"
        hint="Enter your password"
        class="mt-[15px]"
        lazy-rules
        :error="Boolean(props.errorMessage)"
        :error-message="props.errorMessage"
        :rules="[required('Password'), min(6)]" />
      <q-btn
        color="secondary"
        label="Войти"
        glossy
        class="full-width mt-[44px]"
        type="submit" />
    </q-form>
  </div>
</template>
