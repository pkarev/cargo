<script setup lang="ts">
import { RouterView } from 'vue-router'
import CgNav from '@/components/CgNav.vue'
</script>

<template>
  <header class="cg-header">
    <div class="cg-header__wrapper cg-container">
      <CgNav class="cg-header__nav" />
    </div>
  </header>

  <main class="cg-main cg-holy-grail__main cg-container">
    <RouterView />
  </main>
</template>

<style scoped lang="scss" src="./App.scss"></style>
