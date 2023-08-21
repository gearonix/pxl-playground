<script  lang="ts" setup="">
import {createOrder} from './model'
import {useStore} from '@/shared/hooks'
import {$totalAmount} from '@/widgets/header/model/$basket'
import {$auth} from '@/widgets/signup-form'

const auth = useStore($auth)
const totalAmount = useStore($totalAmount)

</script>

<template>
  <q-btn
      v-if="auth.isAuthorized"
      color="primary"
      outline
      :label="`Сформировать заказ: ${totalAmount} р.`"
      :disable="totalAmount === 0"
      type="submit" size="small" @click="createOrder" class="text-xs bg-grey-1"
  />
</template>
