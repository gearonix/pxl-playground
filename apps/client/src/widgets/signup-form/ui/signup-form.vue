<script setup lang="ts">
import { SignupFormTemplate } from '@/entities/signup-form-template'
import { SignupFormValues } from '../types'

const onSubmit = (data: SignupFormValues) => {
  console.log(data)
}
</script>

<template>
  <SignupFormTemplate @submit="onSubmit" />
</template>
