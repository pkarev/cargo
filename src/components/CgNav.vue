<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="cg-nav">
    <RouterLink class="cg-nav__link" to="/">Tours</RouterLink>
    <RouterLink class="cg-nav__link" to="/drivers">Drivers</RouterLink>
  </nav>
</template>

<style scoped lang="sass" src="./CgNav.scss"></style>
