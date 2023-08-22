<script  lang="ts" setup="">
import {CreateUserTemplate} from '@/entities/create-user-template'
import {useStore} from '@/shared/hooks'
import {$errorMsg} from '@/widgets/create-user-form/model'
import {createUserFx} from '@/widgets/create-user-form/model'

const errorMsg = useStore($errorMsg)

</script>

<template>
  <CreateUserTemplate @submit="createUserFx" :error="errorMsg"/>
</template>
