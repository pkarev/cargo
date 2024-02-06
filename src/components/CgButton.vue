<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  theme: 'Main' | 'Invert'
}>()

const buttonClasses = computed<Record<string, boolean>>(() => {
  return {
    'cg-button--main': props.theme === 'Main',
    'cg-button--invert': props.theme === 'Invert'
  }
})
</script>

<template>
  <button type="button" class="cg-button" :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss" src="./CgButton.scss"></style>
