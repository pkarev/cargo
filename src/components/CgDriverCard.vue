<script setup lang="ts">
import type { Driver } from '@/model'
import { computed, reactive, watch } from 'vue'
import { cloneDeep, isEqual } from 'lodash'
import CgInput from '@/components/CgInput.vue'
import CgSelect from '@/components/CgSelect.vue'
import CgButton from '@/components/CgButton.vue'

const props = defineProps<{
  driver: Driver
}>()

const localDriver: Driver = reactive({
  id: 0,
  name: '',
  location: ''
})

watch(
  props.driver,
  (newDriver) => {
    Object.assign(localDriver, cloneDeep(newDriver))
  },
  { immediate: true }
)

const isDriverUpdated = computed<boolean>(() => {
  return !isEqual(props.driver, localDriver)
})

const onSave = () => {
  console.log('on save')
}

const onRevert = () => {
  Object.assign(localDriver, cloneDeep(props.driver))
}
</script>

<template>
  <article class="cg-driver-card">
    <h1 class="cg-title-level-1">Driver</h1>

    <form class="cg-driver-card__form">
      <CgInput class="cg-driver-card__field" v-model="localDriver.name" placeholder="Name" />
      <CgSelect
        class="cg-driver-card__field"
        v-model="localDriver.location"
        :options="[localDriver.location]"
        placeholder="Location"
        data-testid="location"
      />
    </form>

    <div class="cg-driver-card__footer" v-if="isDriverUpdated">
      <CgButton class="cg-driver-card__button" theme="Invert" @click="onRevert">Cancel</CgButton>
      <CgButton class="cg-driver-card__button" theme="Main" @click="onSave">Apply</CgButton>
    </div>
  </article>
</template>

<style scoped lang="scss" src="./CgDriverCard.scss"></style>
