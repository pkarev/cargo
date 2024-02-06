<script setup lang="ts">
import CgTours from '@/components/CgTours.vue'
import useLoadTours, { type LoadToursApi } from '@/use-cases/load-tours'
import { inject, onMounted, reactive, ref } from 'vue'
import type { Tour } from '@/model'

const loadTourError = ref('')
const tours: Tour[] = reactive([])
const notifyError = (message: string) => {
  loadTourError.value = message
}

const api: LoadToursApi = inject('api') as LoadToursApi

const setTours = (newTours: Tour[]) => {
  Object.assign(tours, newTours)
}

const { loadTours } = useLoadTours({
  api,
  notifyError,
  setTours
})

onMounted(async () => {
  await loadTours()
})
</script>

<template>
  <main>
    <CgTours :tours="tours" />
  </main>
</template>
