<script  lang="ts" setup="">
import {AddProductTemplate} from '@/entities/add-product-template'
import {addProductFx} from '@/widgets/add-product-form/model'

</script>

<template>
  <AddProductTemplate @submit="addProductFx" />
</template>
