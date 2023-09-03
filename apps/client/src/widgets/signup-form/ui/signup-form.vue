<script setup lang="ts">
import { ref } from 'vue'

import { SignupFormTemplate } from '@/entities/signup-form-template'
import { useStore } from '@/shared/hooks'
import { removeCharacters } from '@/shared/lib/common'
import { FetchError } from '@/shared/types/http'
import { $auth } from '@/widgets/signup-form/model/auth'

import { signupFx } from '../model/signup.fx'
import { SignupFormValues } from '../types'

const auth = useStore($auth)

const errorMessage = ref<string>()

const onSubmit = signupFx.prepend(
  (data: SignupFormValues): SignupFormValues => {
    return {
      ...data,
      phone: removeCharacters(data.phone)
    }
  }
)

signupFx.failData.watch((error: FetchError) => {
  errorMessage.value = error.json?.message
})
</script>

<template>
  <SignupFormTemplate
    :error-message="errorMessage"
    @submit="onSubmit"
  />
</template>
