<script setup lang="ts">
import CgDrivers from '@/components/CgDrivers.vue'
import { drivers } from '@/api/fixture'
</script>

<template>
  <main>
    <CgDrivers :drivers="drivers" />
  </main>
</template>
