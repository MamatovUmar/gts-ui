<script setup lang="ts">
import { inject, ref, useId, computed, watch } from 'vue'
import { IItem } from '@/types/ui'
import FloatLabel from 'primevue/floatlabel'
import MultiSelect from 'primevue/multiselect'
import './EasyMultiSelect.scss'
import { lang } from '@/constants/lang'
import { LocaleTypes } from '@/types'

const id = useId()

const model = defineModel<string[]>({ default: () => [] })

const locale = inject<LocaleTypes>('locale') || 'ru'

const { options, showToggleAll } = withDefaults(
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
    maxSelectedLabels?: number
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

const computedOptions = computed(() => {
  if (showToggleAll) {
    return [
      {
        label: lang[locale].select_all,
        value: 'all',
      },
      ...options,
    ]
  }

  return options
})

function allSelected(e: string[]) {
  const isAllSelected = e.includes('all')
  const isModelHaveAll = model.value.includes('all')
  const isAllHave = options.every(item => e.includes(item.value as string))

  if (!isAllSelected && isModelHaveAll) return model.value = []

  if (isAllSelected && !isModelHaveAll) return model.value = computedOptions.value.map(item => item.value as string)

  if (!isAllHave && isAllSelected) return model.value = e.filter(item => item !== 'all')

  if (isAllHave && !isAllSelected) return model.value = ['all', ...e]

  model.value = e
}
</script>

<template>
  <FloatLabel :class="['easy-multi-select w-full', size, { 'has-label': label }]">
    <MultiSelect :id="id" :model-value="model" :options="computedOptions" :optionLabel="optionLabel"
      :option-value="optionValue" :class="['w-full', size]" :disabled="disabled" :loading="loading" append-to="self"
      :filter="filter" :invalid="invalid" :display="display" close-icon="none" :close-button="false"
      :show-toggle-all="false" @show="overlayVisible = true" @hide="overlayVisible = false"
      :empty-message="lang[locale].empty_text" :filter-placeholder="lang[locale].search" :placeholder="placeholder"
      :max-selected-labels="maxSelectedLabels" @change="(e) => allSelected(e.value)">
      <template #dropdownicon>
        <i class="icon-Outline-Arrow-Down2 down-icon" :class="{ rotate: overlayVisible }"></i>
      </template>
      <template #closeicon>
        <span class="icon-Outline-Close_SM"></span>
      </template>
      <template #value="slotProps">
        <span>
          {{
            slotProps.value
              .filter((val: string) => val !== 'all')
              .map((val: string) => options.find(opt => opt.value === val)?.label || val)
              .join(', ')
          }}
        </span>
      </template>

    </MultiSelect>
    <label v-if="label" :for="id">{{ label }}</label>
  </FloatLabel>
</template>
