<script setup lang="ts">
import type { Driver } from '@/model'
import CgDriversItem from '@/components/CgDriversItem.vue'

const props = defineProps<{
  drivers: Driver[]
}>()

const driverLink = (id: number) => `/driver/${id}`
</script>

<template>
  <h1 class="cg-drivers__title cg-title-level-1">Drivers list</h1>

  <ul class="cg-drivers__list">
    <li class="cg-drivers__item" v-for="driver in props.drivers" :key="driver.id">
      <RouterLink class="cg-drivers__link" :to="driverLink(driver.id)">
        <CgDriversItem :driver="driver" />
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss" src="./CgDrivers.scss"></style>
