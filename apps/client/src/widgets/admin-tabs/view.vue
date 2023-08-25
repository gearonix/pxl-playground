<script  lang="ts" setup="">
import {useStore} from '@/shared/hooks'
import {$adminTab} from '@/widgets/admin-header/model'
import {AdminUsers} from '@/widgets/admin-users'
import {ChangeSiteStatus} from '@/features/change-site-status'
import {AddProductForm} from '@/widgets/add-product-form'
import {CreateShipment} from '@/features/create-shipment'
import {AdminOrders} from '@/widgets/admin-orders'

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
