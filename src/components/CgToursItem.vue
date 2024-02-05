<script setup lang="ts">
import type { Tour } from '@/model'

const { tour } = defineProps<{
  tour: Tour
}>()
</script>

<template>
  <article class="cg-tour">
    <div class="cg-tour__route-inner">
      <span class="cg-tour__customer">{{ tour.customer }}</span>
      <span class="cg-tour__route"> {{ tour.from }} - {{ tour.to }} </span>
    </div>

    <div class="cg-tour__details-inner">
      <span class="cg-tour__driver">Driver: {{ tour.driver.name }}</span>
      <span class="cg-tour__date">{{ tour.shipmentDate }}</span>
    </div>
  </article>
</template>

<style scoped lang="sass" src="./CgToursItem.scss"></style>
