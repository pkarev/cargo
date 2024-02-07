<script setup lang="ts">
import CgDrivers from '@/components/CgDrivers.vue'
import { mockDrivers } from '@/api/fixture'
</script>

<template>
  <main>
    <CgDrivers :drivers="mockDrivers" />
  </main>
</template>
