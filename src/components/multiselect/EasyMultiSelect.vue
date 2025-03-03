<script setup lang="ts">
import { ref, useId } from 'vue'
import { IItem } from '@/types/ui'
import FloatLabel from 'primevue/floatlabel'
import MultiSelect from 'primevue/multiselect'
import './EasyMultiSelect.scss'

const id = useId()

const model = defineModel()

withDefaults(
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
    size: 'small',
    invalid: false,
    filter: false,
    disabled: false,
    optionValue: 'value',
    optionLabel: 'label',
    loading: false,
  },
)

const overlayVisible = ref()
</script>

<template>
  <FloatLabel :class="['easy-multi-select w-full', size, { 'has-label': label }]">
    <MultiSelect
      :id="id"
      v-model="model"
      :options="options"
      :optionLabel="optionLabel"
      :option-value="optionValue"
      :class="['w-full', size]"
      :disabled="disabled"
      :loading="loading"
      append-to="self"
      :filter="filter"
      :invalid="invalid"
      close-icon="none"
      @show="overlayVisible = true"
      @hide="overlayVisible = false"
    >
      <template #dropdownicon>
        <i class="icon-Outline-Arrow-Down2 down-icon" :class="{ rotate: overlayVisible }"></i>
      </template>
      <template #closeicon>
        <span class="icon-Outline-Close_SM"></span>
      </template>
    </MultiSelect>
    <label v-if="label" :for="id">{{ label }}</label>
  </FloatLabel>
</template>
