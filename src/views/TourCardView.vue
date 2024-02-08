<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CgTourCard from '@/components/CgTourCard.vue'
import { useToursStore } from '@/stores/tours'
import { useLoadTours } from '@/custom-hooks/load-tours'
import CgButton from '@/components/CgButton.vue'

const { loadTours, error } = useLoadTours()
const { getTourById } = useToursStore()
const route = useRoute()
const tour = getTourById(Number(route.params.id))

onMounted(async () => {
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
      <CgTourCard :tour="tour" :drivers="[]" v-if="tour" />
      <p v-else>Tour is not found</p>
    </template>
  </main>
</template>
