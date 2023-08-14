<script setup lang="ts">
import {setProfileTab} from '@/pages/profile/model'
import {$profileTab} from '@/pages/profile/model'
import {useStore} from '@/shared/hooks'

const profileTab = useStore($profileTab)

</script>

<template>
  <div class="page-container bg-grey-1">
    <div class="flex items-end">
      <div class="flex gap-[22px] border-b
    py-[13px] min-w-[450px]">
        <img src="/default-avatar.png" class="h-[72px] w-[72px]">
        <h3 class="text-xl mt-[15px]">test.test@gmail.com</h3>
      </div>
      <div class="border" style="min-width: 300px">
        <q-tabs no-caps active-color="text-dark" indicator-color="transparent"
                class="text-grey-8 h-[100%]" @update:model-value="setProfileTab"
                :model-value="profileTab">
          <q-tab name="data" label="Данные" class="text-dark" />
          <q-tab name="orders" label="Заказы" class="text-dark"/>
          <q-tab name="balance" label="Баланс" class="text-dark"/>
        </q-tabs>
    </div>
    </div>
  </div>
</template>

<style scoped>

</style>
