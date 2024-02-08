<script setup lang="ts">
import { useDriversStore } from '@/stores/drivers'
import { useRoute } from 'vue-router'
import CgDriverCard from '@/components/CgDriverCard.vue'
import type { CgApi, Driver } from '@/model'
import { inject, onMounted } from 'vue'
import { useFetchData } from '@/custom-hooks/fetch-data'

const api: CgApi = inject('api') as CgApi
const { setDrivers } = useDriversStore()
const { fetchData: loadDrivers } = useFetchData<Driver[]>({
  setData: setDrivers,
  fetchCb: () => api.getDrivers()
})

onMounted(async () => {
  await loadDrivers()
})

const { getDriverById } = useDriversStore()
const route = useRoute()
const driver = getDriverById(Number(route.params.id))
</script>

<template>
  <main>
    <CgDriverCard :driver="driver" v-if="driver" />
  </main>
</template>

<style scoped lang="scss"></style>
