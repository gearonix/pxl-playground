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
  change: [value: T]
}>()

</script>

<template>
  <div class="flex items-end">
    <div class="flex gap-[22px] border-b
    py-[13px] min-w-[480px]">
      <img src="/default-avatar.png" class="h-[72px] w-[72px]">
      <h3 class="text-xl mt-[15px] text-grey-9">
        {{ convertPhoneNumber(auth.phoneNumber) }}
        <em v-if="isAdmin">(Администратор)</em>
      </h3>
    </div>
    <div class="border" style="min-width: 300px">
      <q-tabs no-caps active-color="text-dark" indicator-color="transparent"
              class="text-grey-8 h-[100%]" @update:model-value="val => emit('change', val)"
              :model-value="props.tab">
        <q-tab class="text-dark" v-for="{name, label} in tabs" :name="name" :label="label" />
      </q-tabs>
    </div>
  </div>
</template>
