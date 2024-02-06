<script setup lang="ts">
import type { Driver } from '@/model'

const { driver } = defineProps<{
  driver: Driver
}>()
</script>

<template>
  <article class="cg-drivers-item">
    <h1 class="cg-title-level-2 cg-drivers-item__name">{{ driver.name }}</h1>
    <span class="cg-drivers-item__location">{{ driver.location }}</span>
  </article>
</template>

<style scoped lang="scss" src="./CgDriversItem.scss"></style>
