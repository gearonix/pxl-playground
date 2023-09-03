<script  lang="ts" setup="">
import {ChangeSiteStatus} from '@/features/change-site-status'
import {CreateShipment} from '@/features/create-shipment'
import {useStore} from '@/shared/hooks'
import {AddProductForm} from '@/widgets/add-product-form'
import {$adminTab} from '@/widgets/admin-header/model'
import {AdminOrders} from '@/widgets/admin-orders'
import {AdminUsers} from '@/widgets/admin-users'

const adminTab = useStore($adminTab)


</script>

<template>
  <div v-if="adminTab === 'users'">
    <AdminUsers />
  </div>
  <div v-if="adminTab === 'add-product'">
    <AddProductForm />
  </div>
  <div v-if="adminTab === 'shipments'">
    <CreateShipment />
  </div>
  <div v-if="adminTab === 'orders'">
    <AdminOrders />
  </div>

  <div v-if="adminTab === 'site-status'">
    <ChangeSiteStatus />
  </div>
</template>
