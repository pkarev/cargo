<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  options: string[]
  placeholder: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
}>()

const onChange = ($event: Event) => {
  emit('update:modelValue', ($event.target as HTMLSelectElement).value)
}

const selectClass = computed<Record<string, boolean>>(() => {
  return {
    'cg-select--filled-in': !!props.modelValue
  }
})
</script>

<template>
  <div class="cg-select" :class="selectClass">
    <span class="cg-select__placeholder" v-if="props.placeholder">
      {{ placeholder }}
    </span>
    <select class="cg-select__select" :value="props.modelValue" @change="onChange">
      <option
        class="cg-select__option"
        v-for="option in props.options"
        :value="option"
        :key="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss" src="./CgSelect.scss"></style>
