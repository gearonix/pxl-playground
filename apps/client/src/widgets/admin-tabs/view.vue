<script  lang="ts" setup="">
import {useStore} from '@/shared/hooks'
import {$adminTab} from '@/widgets/admin-header/model'
import {AdminUsers} from '@/widgets/admin-users'

const adminTab = useStore($adminTab)


</script>

<template>
  <div v-if="adminTab === 'users'">
    <AdminUsers />
  </div>
</template>
