<script setup lang="ts">
import { inject, ref, useId } from 'vue'
import { IItem } from '@/types/ui'
import FloatLabel from 'primevue/floatlabel'
import MultiSelect from 'primevue/multiselect'
import './EasyMultiSelect.scss'
import {lang} from '@/constants/lang'
import {LocaleTypes} from '@/types'

const id = useId()

const model = defineModel()

const locale = inject<LocaleTypes>('locale') || 'ru'

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
    display?: 'comma' | 'chip'
    showToggleAll?: boolean
    placeholder?: string
  }>(),
  {
    size: 'small',
    invalid: false,
    filter: false,
    disabled: false,
    optionValue: 'value',
    optionLabel: 'label',
    loading: false,
    display: 'comma',
    showToggleAll: true,
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
      :display="display"
      close-icon="none"
      :close-button="false"
      :show-toggle-all="showToggleAll"
      @show="overlayVisible = true"
      @hide="overlayVisible = false"
      :empty-message="lang[locale].empty_text"
      :filter-placeholder="lang[locale].search"
      :placeholder="placeholder"
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
