<script setup lang="ts">

import {RoutePaths} from '@/shared/config/paths'
</script>

<template>
  <q-tabs no-caps active-color="text-dark" indicator-color="transparent"
          class="text-grey-8 h-[100%]">
    <router-link :to="RoutePaths.MAIN">
    <q-tab name="main" label="Главная" class="text-dark" />
    </router-link>
    <router-link :to="RoutePaths.PROFILE">
    <q-tab name="link-1" label="Профиль" class="text-dark"/>
    </router-link>
    <q-tab name="link-2" label="Link" class="text-dark"/>
    <q-tab name="link-2" label="Link" class="text-dark"/>
  </q-tabs>
</template>

<style scoped>

</style>
