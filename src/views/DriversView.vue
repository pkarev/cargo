<script setup lang="ts">
import CgDrivers from '@/components/CgDrivers.vue'
import type { CgApi, Driver } from '@/model'
import { inject, onMounted } from 'vue'
import { useFetchData } from '@/custom-hooks/fetch-data'
import { useDriversStore } from '@/stores/drivers'

const api: CgApi = inject('api') as CgApi
const { drivers, setDrivers } = useDriversStore()
const { fetchData: loadDrivers } = useFetchData<Driver[]>({
  setData: setDrivers,
  fetchCb: () => api.getDrivers()
})

onMounted(async () => {
  await loadDrivers()
})
</script>

<template>
  <main>
    <CgDrivers :drivers="drivers" />
  </main>
</template>
