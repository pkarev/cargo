<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  placeholder: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
}>()

const onInput = ($event: Event) => {
  emit('update:modelValue', ($event.target as HTMLInputElement).value)
}

const inputClass = computed<Record<string, boolean>>(() => {
  return {
    'cg-input--filled-id': !!props.modelValue
  }
})
</script>

<template>
  <div class="cg-input" :class="inputClass">
    <span class="cg-input__label" v-if="props.placeholder">
      {{ props.placeholder }}
    </span>
    <input
      class="cg-input__input"
      type="text"
      :value="props.modelValue"
      @input="onInput"
      :placeholder="placeholder"
      :name="placeholder"
    />
  </div>
</template>

<style scoped lang="scss" src="./CgInput.scss"></style>
