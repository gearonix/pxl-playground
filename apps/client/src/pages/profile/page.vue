<script setup lang="ts">
import {setProfileTab} from '@/pages/profile/model'
import {$profileTab} from '@/pages/profile/model'
import {useStore} from '@/shared/hooks'
import {ChangeDeliveryAddress} from '@/features/change-delivery-address'
import {$auth} from '@/widgets/signup-form'
import {ProfileOrders} from '@/widgets/profile-orders'

const profileTab = useStore($profileTab)
const auth = useStore($auth)
</script>

<template>
  <div class="page-container bg-grey-1">
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

    <div v-if="profileTab === 'data'">
      <h4 class="profile-head">Данные</h4>

      <ChangeDeliveryAddress />
    </div>

    <div v-if="profileTab === 'orders'">
      <h4 class="profile-head">Заказы</h4>

      <ProfileOrders />
    </div>


  </div>
</template>

<style scoped>

</style>
