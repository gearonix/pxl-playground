<script setup lang="ts">
import { RoutePaths } from '@/shared/config/paths'
import { logoutFx } from '@/widgets/signup-form'
</script>

<template>
  main-page (not ready yet)
  <router-link :to="RoutePaths.SIGNUP"> signup </router-link>
  <br >
  <q-btn @click="logoutFx">LOGOUT</q-btn>
</template>

<style scoped></style>
