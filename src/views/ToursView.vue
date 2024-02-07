<script setup lang="ts">
import { onMounted } from 'vue'
import CgTours from '@/components/CgTours.vue'
import CgButton from '@/components/CgButton.vue'
import { useLoadTours } from '@/custom-hooks/load-tours'

const { error, loadTours, tours } = useLoadTours()

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
