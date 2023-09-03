<script  lang="ts" setup="">
import {AddProductTemplate} from '@/entities/add-product-template'
import {ImportXlsxOrders} from '@/features/import-xlsx-orders'
import {addProductsFx} from '@/widgets/add-product-form/model'

</script>

<template>
  <ImportXlsxOrders/>
  <AddProductTemplate @submit="addProductsFx" />
</template>
