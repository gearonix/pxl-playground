<script  lang="ts" setup generic="T extends string">

import {useStore} from '@/shared/hooks'
import {convertPhoneNumber} from '@/shared/lib/helpers'
import {UserTab} from '@/widgets/profile-header/lib'
import {$auth} from '@/widgets/signup-form'


const auth = useStore($auth)

const props = defineProps<{
  tabs: UserTab<T>[],
  tab: T,
  isAdmin: boolean
}>()

const emit = defineEmits<{
  edit: [value: T]
}>()

</script>

<template>
  <div class="flex items-end lg:flex-col lg:!items-start lg:gap-[25px]">
    <div class="flex gap-[22px] border-b
    py-[13px] min-w-[480px] md-s1:min-w-[200px] md-s1:w-max">
      <img src="/default-avatar.png" class="h-[72px] w-[72px] md-s1:h-[55px] md-s1:w-[55px]">
      <div>
        <h3 class="text-xl mt-[15px] text-grey-9 md-s1:!text-sm">
          {{ auth.username }}
          <em v-if="isAdmin">(Администратор)</em>
        </h3>
        <h3 class="text-sm mt-[5px] text-grey-7">
          {{ convertPhoneNumber(auth.phoneNumber) }}
        </h3>
      </div>
    </div>
    <div class="border" style="min-width: 300px">
      <q-tabs no-caps active-color="text-dark" indicator-color="transparent"
              class="text-grey-8 h-[100%]" @update:model-value="val => {
                emit('edit', val)
              }"
              :model-value="props.tab">
        <q-tab class="text-dark" v-for="{name, label} in tabs" :name="name" :label="label" />
      </q-tabs>
    </div>
  </div>
</template>
