<script setup lang="ts">
import GlobalStyles from '@/app/styles/global-styles.vue'

import Layout from '../layout/layout.vue'
</script>

<template>
  <GlobalStyles>
    <Layout>
      <router-view></router-view>
    </Layout>
  </GlobalStyles>
</template>
