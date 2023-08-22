<script  lang="ts" setup="">
import {useStore} from '@/shared/hooks'
import {$adminTab} from '@/widgets/admin-header/model'
import {AdminUsers} from '@/widgets/admin-users'
import {ChangeSiteStatus} from '@/features/change-site-status'

const adminTab = useStore($adminTab)


</script>

<template>
  <div v-if="adminTab === 'users'">
    <AdminUsers />
  </div>
  <div v-if="adminTab === 'site-status'">
    <ChangeSiteStatus />
  </div>
</template>
