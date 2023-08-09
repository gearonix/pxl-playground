<script setup lang="ts">
import AuthGuard from '../auth-guard/auth-guard.vue'
import Layout from '../layout/layout.vue'
import GlobalStyles from '../styles/global-styles.vue'
</script>

<template>
  <GlobalStyles>
    <Layout>
      <AuthGuard>
        <router-view />
      </AuthGuard>
    </Layout>
  </GlobalStyles>
</template>
