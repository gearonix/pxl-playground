<script  lang="ts" setup="">

import {useStore} from '@/shared/hooks'
import {getAllUsersFx} from '@/widgets/admin-users/model'
import {$users} from '@/widgets/admin-users/model'
import {CreateUserForm} from '@/widgets/create-user-form'
import {onMounted} from 'vue'
import {UserCard} from '@/entities/user-card'


const users = useStore($users)

onMounted(() => {
  getAllUsersFx()
})

</script>

<template>
    <h3 class="profile-head">Пользователи</h3>
   <div class="max-h-[620px] min-h-[250px] overflow-y-auto w-[67%]
   custom-scrollbar p-[15px] border-stone-300 border-y">
     <UserCard v-for="user in users" :user="user"/>
     <h3
         class="text-2xl text-grey-6 font-normal mt-[35px]"
         v-if="users.length === 0">Здесь пока-что пусто</h3>
   </div>
  <CreateUserForm />

</template>
