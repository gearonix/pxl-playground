<script setup lang="ts">
import { logo } from '@/shared/assets'
import { RoutePaths } from '@/shared/config/paths'
</script>

<template>
  <header
    class="w-full h-[73px] bg-grey-2 shadow-sm flex items-center px-[35px] border-grey">
    <router-link :to="RoutePaths.MAIN">
      <img :src="logo" alt="logo" class="w-[155px] h-[50px] cursor-pointer" />
    </router-link>
  </header>
</template>

<style scoped></style>
