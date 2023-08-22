<script  lang="ts" setup="">

import {createAdminTabs} from '@/widgets/admin-header/lib'
import {$adminTab, setAdminTab} from './model'
import {useStore} from '@/shared/hooks'
import {$auth} from '@/widgets/signup-form'
import {UserHeader} from '@/entities/user-header'


const adminTab = useStore($adminTab)

const tabs = createAdminTabs()

</script>

<template>
 <UserHeader @change="setAdminTab" :tab="adminTab" :tabs="tabs" :isAdmin="true"/>
</template>
