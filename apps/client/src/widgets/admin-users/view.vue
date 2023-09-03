<script  lang="ts" setup="">

import {onMounted} from 'vue'

import {UserCard} from '@/entities/user-card'
import {useStore} from '@/shared/hooks'
import {$users,getAllUsersFx} from '@/widgets/admin-users/model'
import {CreateUserForm} from '@/widgets/create-user-form'


const users = useStore($users)

onMounted(() => {
  getAllUsersFx()
})

</script>

<template>
  <h3 class="profile-head">
    Пользователи
  </h3>
  <div
    class="max-h-[620px] min-h-[250px] overflow-y-auto max-w-[1107px]
   custom-scrollbar p-[15px] border-stone-300 border-y"
  >
    <UserCard
      v-for="user in users"
      :user="user"
    />
    <h3
      v-if="users.length === 0"
      class="text-2xl text-grey-6 font-normal mt-[35px]"
    >
      Здесь пока-что пусто
    </h3>
  </div>
  <CreateUserForm />
</template>
