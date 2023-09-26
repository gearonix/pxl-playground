<script setup lang="ts">
import {HeaderRightSection} from '@/entities/header-right-section'
import {Navbar} from '@/entities/navbar'
import {logo} from '@/shared/assets'
import {RoutePaths} from '@/shared/config/paths'
import {useStore} from "@/shared/hooks";
import {$auth} from "@/widgets/signup-form"

const user = useStore($auth)

</script>

<template>
  <header
    class="w-full h-[76px] bg-grey-1 shadow-sm flex items-center
    border-grey justify-between
    px-[70px] xl-s1:px-[20px] md-s1:!justify-center md-s1:h-[69px]"
  >
    <router-link :to="RoutePaths.MAIN">
      <img
        :src="logo"
        alt="logo"
        :class="`w-[155px] h-[50px] cursor-pointer
        md-s1:${!user.isAuthorized ? 'block' : 'hidden'}`"
      >
    </router-link>
    <Navbar />
    <HeaderRightSection />
  </header>
</template>

<style scoped></style>
