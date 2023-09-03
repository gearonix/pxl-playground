<script  lang="ts" setup="">
import {useExcelImport} from './import.hook'
import {addProductsFx} from '@/widgets/add-product-form/model'
import {CreateProduct} from 'server-types'
import {importExcelFile} from './xlsx/import'

const addProducts = async (products: CreateProduct[]) => {
  await addProductsFx(products)
}

const importExcelFile = useExcelImport(addProducts)

</script>

<template>
  <h3 class="text-xl text-neutral-800 mt-[25px]">
    Импорт через Excel
  </h3>
  <q-file outlined @update:model-value="importExcelFile"
          class="max-w-[200px]
          mt-[18px]" label="Выберите файл" dense color="secondary">
    <template v-slot:prepend>
      <q-icon name="attach_file" />
    </template>
  </q-file>
</template>
