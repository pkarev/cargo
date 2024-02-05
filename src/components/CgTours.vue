<script setup lang="ts">
import CgToursItem from '@/components/CgToursItem.vue'
import type { Tour } from '@/model'

const { tours } = defineProps<{
  tours: Tour[]
}>()

const tourLink = (id: number) => `/tour/${id}`
</script>

<template>
  <h1 class="cg-tours__title cg-title-level-1">Tours list</h1>

  <ul class="cg-tours__list">
    <li class="cg-tours__item" v-for="tour in tours" :key="tour.id">
      <RouterLink class="cg-tours__link" :to="tourLink(tour.id)">
        <CgToursItem :tour="tour" />
      </RouterLink>
    </li>
  </ul>
</template>

<style lang="scss" src="./CgTours.scss" scoped></style>
