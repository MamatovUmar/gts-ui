<script setup lang="ts">
import { useId } from 'vue'
import type { IItem } from 'src/types/ui'
import { useClickOutside } from '../../composables/useClickOutside'
import { computed, ref } from 'vue'
import './EasySelect.scss'
import Dropdown from 'primevue/dropdown'
import FloatLabel from 'primevue/floatlabel'
import EasyLoader from '@/components/loader/EasyLoader.vue'

const props = withDefaults(
  defineProps<{
    options: IItem[]
    label?: string
    size?: 'small' | 'large'
    invalid?: boolean
    filter?: boolean
    disabled?: boolean
    optionValue?: string
    optionLabel?: string
    loading?: boolean
  }>(),
  {
    size: 'large',
    invalid: false,
    filter: false,
    disabled: false,
    optionValue: 'value',
    optionLabel: 'label',
    loading: false,
  },
)

const id = useId()
const model = defineModel()
const overlayVisible = ref()
const dpRef = ref<HTMLElement>()

const setSize = computed(() => {
  if (props.options?.length > 4) {
    return '200px'
  } else {
    return `${props.options?.length * 45 + 14}px`
  }
})
useClickOutside(dpRef)
</script>

<template>
  <FloatLabel :class="['easy-select w-full', props.size, { 'has-label': props.label }]">
    <Dropdown
      v-model="model"
      :inputId="id"
      :invalid="props.invalid"
      :options="props.options"
      :filter="filter"
      :scroll-height="setSize"
      :optionLabel="optionLabel || 'label'"
      :option-value="optionValue || 'value'"
      :class="['w-full', props.size]"
      append-to="self"
      :disabled="disabled"
      :virtualScrollerOptions="{ lazy: true, itemSize: 45 }"
      :loading
      @show="overlayVisible = true"
      @hide="overlayVisible = false"
    >
      <template #dropdownicon>
        <i class="icon-Arrow---Down-2-Outline down-icon" :class="{ rotate: overlayVisible }"></i>
      </template>
      <template #loadingicon>
        <EasyLoader
          :size="20"
          border-color="var(--background-neutral-default)"
          border-top-color="var(--icon-subtle)"
          :border-width="2"
          bar-color="var(--icon-ssubtle)"
        ></EasyLoader>
      </template>
    </Dropdown>
    <label v-if="props.label" :for="id">{{ props.label }}</label>
  </FloatLabel>
</template>
