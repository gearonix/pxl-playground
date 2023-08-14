<script setup lang="ts">
import {TabsPanels} from '@/entities/tabs-panels'
import { PriceTable } from '@/widgets/price-table'
</script>

<template>
  <h3 class="text-2xl text-neutral-800 ml-[16px] mt-[15px] mb-[20px]">Выберите товар</h3>
  <TabsPanels />
  <PriceTable />
</template>

<style scoped></style>
