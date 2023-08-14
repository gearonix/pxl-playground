<script setup lang="ts">
import {logo} from '@/shared/assets'
import {RoutePaths} from '@/shared/config/paths'

import {Navbar} from '@/entities/navbar'
import {HeaderRightSection} from '@/entities/header-right-section'




</script>

<template>
  <header
    class="w-full h-[73px] bg-grey-1 shadow-sm flex items-center
    px-[35px] border-grey justify-between px-[70px]">
    <router-link :to="RoutePaths.MAIN">
      <img :src="logo" alt="logo" class="w-[155px] h-[50px] cursor-pointer" />
    </router-link>
    <Navbar/>
    <HeaderRightSection/>
  </header>
</template>

<style scoped></style>
