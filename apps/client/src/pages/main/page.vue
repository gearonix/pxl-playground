<script setup lang="ts">
import {TabsPanels} from '@/entities/tabs-panels'
import { PriceTable } from '@/widgets/price-table'
</script>

<template>
  <div class="px-[35px] md:px-[5px]">
    <h3 class="text-2xl text-neutral-800 ml-[16px] mt-[15px] mb-[0px]">
      Страница оформления заказа
    </h3>
    <TabsPanels />
    <PriceTable />
  </div>
</template>

<style scoped></style>
