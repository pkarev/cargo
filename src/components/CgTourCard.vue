<script setup lang="ts">
import { computed, reactive, watch } from 'vue'
import CgInput from '@/components/CgInput.vue'
import type { Tour } from '@/model'
import { cloneDeep, isEqual } from 'lodash'
import CgButton from '@/components/CgButton.vue'
import CgSelect from '@/components/CgSelect.vue'

const { tour } = defineProps<{
  tour: Tour
}>()

const localTour: Tour = reactive({
  id: 0,
  customer: '',
  from: '',
  to: '',
  shipmentDate: '',
  driver: {
    name: '',
    location: '',
    id: 0
  }
})

watch(
  tour,
  (newTour) => {
    Object.assign(localTour, cloneDeep(newTour))
  },
  { immediate: true }
)

const isTourUpdated = computed<boolean>(() => {
  return !isEqual(tour, localTour)
})

const onSave = () => {
  console.log('on save')
}

const onRevert = () => {
  Object.assign(localTour, cloneDeep(tour))
}
</script>

<template>
  <article class="cg-tour-card">
    <h1 class="cg-title-level-1">Tour</h1>

    <form class="cg-tour-card__form">
      <CgInput class="cg-tour-card__field" v-model="localTour.customer" placeholder="Customer" />
      <CgSelect
        class="cg-tour-card__field"
        v-model="localTour.from"
        placeholder="From"
        :options="[localTour.from]"
        data-testid="from"
      />
      <CgSelect
        class="cg-tour-card__field"
        v-model="localTour.to"
        placeholder="To"
        :options="[localTour.to]"
        data-testid="to"
      />
      <CgInput class="cg-tour-card__field" v-model="localTour.shipmentDate" placeholder="When" />
      <CgSelect
        class="cg-tour-card__field"
        v-model="localTour.driver.name"
        placeholder="Driver"
        :options="[localTour.driver.name]"
        data-testid="driver"
      />
    </form>

    <div class="cg-tour-card__footer" v-if="isTourUpdated">
      <CgButton class="cg-tour-card__button" @click="onRevert" :theme="'Invert'"> Cancel</CgButton>
      <CgButton class="cg-tour-card__button" @click="onSave" :theme="'Main'"> Apply</CgButton>
    </div>
  </article>
</template>

<style scoped lang="scss" src="./CgTourCard.scss"></style>
