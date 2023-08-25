<script  lang="ts" setup="">

import {Logout} from '@/features/logout'
import {$profileTab} from '@/widgets/profile-header/model'
import {ChangeDeliveryAddress} from '@/features/change-delivery-address'
import {useStore} from '@/shared/hooks'
import {ProfileOrders} from '@/widgets/profile-orders'
import {UserBalance} from '@/widgets/user-balance'

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

  <div v-if="profileTab === 'balance'">
    <UserBalance/>
  </div>
  <div v-if="profileTab === 'leave-account'">
    <Logout/>
  </div>
</template>
