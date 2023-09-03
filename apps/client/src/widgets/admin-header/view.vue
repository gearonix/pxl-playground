<script  lang="ts" setup="">

import {UserHeader} from '@/entities/user-header'
import {useStore} from '@/shared/hooks'
import {createAdminTabs} from '@/widgets/admin-header/lib'

import {$adminTab, setAdminTab} from './model'


const adminTab = useStore($adminTab)

const tabs = createAdminTabs()

</script>

<template>
  <UserHeader
    :tab="adminTab"
    :tabs="tabs"
    :is-admin="true"
    @edit="setAdminTab"
  />
</template>
