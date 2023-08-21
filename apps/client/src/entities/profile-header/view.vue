<script  lang="ts" setup="">

import {$profileTab, setProfileTab} from './model'
import {useStore} from '@/shared/hooks'
import {$auth} from '@/widgets/signup-form'


const auth = useStore($auth)
const profileTab = useStore($profileTab)

</script>

<template>
  <div class="flex items-end">
    <div class="flex gap-[22px] border-b
    py-[13px] min-w-[450px]">
      <img src="/default-avatar.png" class="h-[72px] w-[72px]">
      <h3 class="text-xl mt-[15px]">{{ auth.phoneNumber }}</h3>
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
</template>
