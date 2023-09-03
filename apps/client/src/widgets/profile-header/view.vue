<script  lang="ts" setup="">

import {UserHeader} from '@/entities/user-header'
import {useStore} from '@/shared/hooks'
import {createTabs} from '@/widgets/profile-header/lib'
import {$auth} from '@/widgets/signup-form'

import {$profileTab, setProfileTab} from './model'


const auth = useStore($auth)
const profileTab = useStore($profileTab)

const tabs = createTabs()

</script>

<template>
  <UserHeader
    :tab="profileTab"
    :tabs="tabs"
    @edit="setProfileTab"
  />
</template>
