<script setup lang="ts">
import { inject, onMounted } from 'vue'
import CgTours from '@/components/CgTours.vue'
import CgButton from '@/components/CgButton.vue'
import { useFetchData } from '@/custom-hooks/fetch-data'
import { useToursStore } from '@/stores/tours'
import type { GetToursApi, Tour } from '@/model'

const { tours, setTours } = useToursStore()
const api: GetToursApi = inject('api') as GetToursApi
const { error, fetchData: loadTours } = useFetchData<Tour[]>({
  setData: setTours,
  fetchCb: () => api.getTours()
})

onMounted(async () => {
  await loadTours()
})
</script>

<template>
  <main>
    <template v-if="error">
      <h1>An error occurred while loading tours:</h1>
      <p>{{ error }}</p>
      <CgButton :theme="'Main'" @click="loadTours">Retry</CgButton>
    </template>

    <CgTours :tours="tours" v-else />
  </main>
</template>
