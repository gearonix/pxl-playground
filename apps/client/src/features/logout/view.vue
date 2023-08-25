<script  lang="ts" setup="">
import {logoutFx} from '@/widgets/signup-form'

</script>

<template>
  <h3 class="profile-head mb-[10px]">Выйти  из аккаунта</h3>
  <q-btn color="red" outline class="mt-[10px]" @click="logoutFx">
    Выйти
  </q-btn>
</template>
