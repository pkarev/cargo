<script setup lang="ts">
import { inject, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CgTourCard from '@/components/CgTourCard.vue'
import CgButton from '@/components/CgButton.vue'
import { useFetchData } from '@/custom-hooks/fetch-data'
import { useToursStore } from '@/stores/tours'
import { useDriversStore } from '@/stores/drivers'
import type { CgApi, Driver, Tour } from '@/model'

const api: CgApi = inject('api') as CgApi

const { tours, setTours } = useToursStore()
console.log(tours)
const { fetchData: loadTours, error } = useFetchData<Tour[]>({
  setData: setTours,
  fetchCb: () => api.getTours()
})

const { drivers, setDrivers } = useDriversStore()
console.log(drivers)
const { fetchData: loadDrivers } = useFetchData<Driver[]>({
  setData: setDrivers,
  fetchCb: () => api.getDrivers()
})

const { getTourById } = useToursStore()
const route = useRoute()
const tour = getTourById(Number(route.params.id))

onMounted(async () => {
  await loadDrivers()
  await loadTours()
})
</script>

<template>
  <main>
    <template v-if="error">
      <h1>An error occurred while loading tour:</h1>
      <p>{{ error }}</p>
      <CgButton :theme="'Main'" @click="loadTours">Retry</CgButton>
    </template>

    <template v-else>
      <CgTourCard :tour="tour" :drivers="drivers" v-if="tour" />
      <p v-else>Tour is not found</p>
    </template>
  </main>
</template>
