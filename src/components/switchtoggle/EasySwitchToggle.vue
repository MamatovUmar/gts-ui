<script setup lang="ts">
import type { IItem } from 'src/types/ui'
import './EasySwitchToggle.scss'
import SelectButton from 'primevue/selectbutton';

const props = withDefaults(
  defineProps<{
    options: IItem[]
    size?: 'small' | 'large'
    optionValue?: string
    optionLabel?: string
  }>(),
  {
    size: 'large',
    optionValue: 'value',
    optionLabel: 'label',
  },
)
const model = defineModel()

if (props.options?.length > 0) {
  model.value = props.options[0];
}
</script>

<template>
<div :class="['easy-switchtoggle', size]">
  <SelectButton v-model="model" :unselectable="false" :options="options" option-label="label" aria-labelledby="basic" />
</div>
</template>
