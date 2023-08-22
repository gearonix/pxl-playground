<script  lang="ts" setup="">

import {createTabs} from '@/widgets/profile-header/lib'
import {$profileTab, setProfileTab} from './model'
import {useStore} from '@/shared/hooks'
import {$auth} from '@/widgets/signup-form'
import {UserHeader} from '@/entities/user-header'


const auth = useStore($auth)
const profileTab = useStore($profileTab)

const tabs = createTabs()

</script>

<template>
 <UserHeader @change="setProfileTab" :tab="profileTab" :tabs="tabs"/>
</template>
