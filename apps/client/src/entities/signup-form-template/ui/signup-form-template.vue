<script setup lang="ts">
import { min, required } from '@/shared/lib/form/validators'
import { SignupFormValues } from '@/widgets/signup-form'
import { useForm } from '../hooks/useForm'

const { formValues } = useForm()
const emit = defineEmits<{
  submit: [formValues: SignupFormValues]
}>()

const onSubmit = () => {
  emit('submit', formValues.value)
}
</script>

<template>
  <div
    class="w-[365px] h-[510px] rounded-md drop-shadow-md px-[35px] pt-[30px] bg-grey-2 mt-[40px] m-center">
    <h3 class="text-xl font-bold text-neutral-800">Welcome! Sign in</h3>
    <q-form class="full-width mt-[40px]" @submit="onSubmit">
      <q-input
        v-model="formValues.phone"
        label="Phone"
        mask="(###) ### - ####"
        fill-mask
        hint="Mask: +7 926 100 1000"
        lazy-rules
        :rules="[required('Phone')]" />
      <q-input
        v-model="formValues.password"
        label="Password"
        fill-mask
        type="password"
        maxlength="12"
        hint="Enter your password"
        class="mt-[15px]"
        lazy-rules
        :rules="[required('Password'), min(6)]" />
      <q-btn
        color="secondary"
        label="Sign in"
        glossy
        class="full-width mt-[44px]"
        type="submit" />
    </q-form>
  </div>
</template>
