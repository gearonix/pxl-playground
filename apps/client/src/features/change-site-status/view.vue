<script  lang="ts" setup="">

import {SiteStatus} from 'server/src/_prisma-types'
import {computed,onMounted} from 'vue'

import {Logout} from '@/features/logout'
import {useStore} from '@/shared/hooks'

import {$siteStatus, changeSiteStatusFx,getSiteStatusFx} from './model'


const siteStatus = useStore($siteStatus)

const isWorking = computed(() => {
  return siteStatus.value === SiteStatus.WORKING
})

onMounted(() => {
  getSiteStatusFx()
})

const changeSiteStatus = () => {
  changeSiteStatusFx(isWorking.value)
}

</script>

<template>
  <h3 class="profile-head mb-[10px]">
    Изменить статус сайта
  </h3>
  <p class="text-grey-9 max-w-[350px] my-[0px]">
    Вы можете выключить сайт на время,
    или перевести его в рабочее состояние.
  </p>
  <q-btn
    color="red mt-[27px]"
    glossy
    :outline="!isWorking"
    @click="changeSiteStatus"
  >
    {{ isWorking ?
      'Выключить сайт' :
      'Перевести в рабочее состояние' }}
  </q-btn>
  <Logout />
</template>
