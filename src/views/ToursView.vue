<script setup lang="ts">
import CgTours from '@/components/CgTours.vue'
import { tours } from '@/api/fixture'
</script>

<template>
  <main>
    <CgTours :tours="tours" />
  </main>
</template>
