<script setup lang="ts">
import CgTours from '@/components/CgTours.vue'
import useLoadTours, { type LoadToursApi } from '@/use-cases/load-tours'
import { inject, onMounted, ref } from 'vue'
import CgButton from '@/components/CgButton.vue'
import { useToursStore } from '@/stores/tours'

const loadTourError = ref('')
const isLoading = ref(false)
const { tours, setTours } = useToursStore()

const api: LoadToursApi = inject('api') as LoadToursApi
const resetTours = () => {
  setTours([])
  loadTourError.value = ''
}

const setLoading = (val: boolean) => {
  isLoading.value = val
}
const notifyError = (message: string) => {
  loadTourError.value = message
}

const { loadTours } = useLoadTours({
  api,
  notifyError,
  setTours,
  resetTours,
  setLoading
})

onMounted(async () => {
  await loadTours()
})
</script>

<template>
  <main>
    <template v-if="loadTourError">
      <h1>An error occurred while loading tours:</h1>
      <p>{{ loadTourError }}</p>
      <CgButton :theme="'Main'" @click="loadTours">Retry</CgButton>
    </template>

    <CgTours :tours="tours" v-else />
  </main>
</template>
