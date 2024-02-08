<script setup lang="ts">
import { computed } from 'vue'
import { get } from 'lodash'

const props = defineProps<{
  modelValue: string | Record<string, any>
  options: Array<string | Record<string, any>>
  placeholder: string
  trackBy?: string
  label?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', val: string | Record<string, any>): void
}>()

const onChange = ($event: Event) => {
  if (!props.trackBy) {
    emit('update:modelValue', ($event.target as HTMLSelectElement).value)

    return
  }

  const option = props.options.find((option) => {
    return get(option, props.trackBy as string) == ($event.target as HTMLSelectElement).value
  })

  emit('update:modelValue', option as Record<string, any>)
}

const selectClass = computed<Record<string, boolean>>(() => {
  return {
    'cg-select--filled-in': !!props.modelValue
  }
})

const getOptionValue = (option: string | Record<string, any>) => {
  if (!props?.trackBy) {
    return option as string
  }

  return get(option, props.trackBy) as string
}

const getOptionLabel = (option: string | Record<string, string>) => {
  if (!props?.label) {
    return option
  }

  return get(option, props.label, '')
}

const isOptionSelected = (option: string | Record<string, string>) => {
  if (!props?.trackBy) {
    return option === getOptionValue(props.modelValue)
  }

  return get(option, props.trackBy, '') === getOptionValue(props.modelValue)
}
</script>

<template>
  <div class="cg-select" :class="selectClass">
    <span class="cg-select__placeholder" v-if="props.placeholder">
      {{ placeholder }}
    </span>
    <select class="cg-select__select" :value="getOptionValue(props.modelValue)" @change="onChange">
      <option
        class="cg-select__option"
        v-for="option in props.options"
        :value="getOptionValue(option)"
        :key="getOptionValue(option)"
        :selected="isOptionSelected(option)"
      >
        {{ getOptionLabel(option) }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss" src="./CgSelect.scss"></style>
