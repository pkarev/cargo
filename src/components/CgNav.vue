<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const shownRoutes = () => router.options.routes.filter((route) => !route?.meta?.isHiddenInNav)
</script>

<template>
  <nav class="cg-nav">
    <RouterLink
      class="cg-nav__link"
      :to="route.path"
      v-for="(route, index) in shownRoutes()"
      :key="index"
    >
      {{ route.name }}
    </RouterLink>
  </nav>
</template>

<style scoped lang="sass" src="./CgNav.scss"></style>
