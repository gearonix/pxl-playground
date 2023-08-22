<script  lang="ts" setup="">

import {$profileTab} from '@/widgets/profile-header/model'
import {ChangeDeliveryAddress} from '@/features/change-delivery-address'
import {useStore} from '@/shared/hooks'
import {ProfileOrders} from '@/widgets/profile-orders'

const profileTab = useStore($profileTab)

</script>

<template>
  <div v-if="profileTab === 'data'">
    <h4 class="profile-head">Данные</h4>

    <ChangeDeliveryAddress />
  </div>

  <div v-if="profileTab === 'orders'">
    <h4 class="profile-head">Заказы</h4>

    <ProfileOrders />
  </div>
</template>
