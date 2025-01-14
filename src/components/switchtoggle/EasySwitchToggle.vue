<script setup lang="ts">
import type {IItem} from 'src/types/ui'
import './EasySwitchToggle.scss'
import SelectButton from 'primevue/selectbutton';

const props = withDefaults(
  defineProps<{
    options: IItem[]
    optionValue?: string
    optionLabel?: string
    optionDisabled?: string
  }>(),
  {
    optionValue: 'value',
    optionLabel: 'label',
    optionDisabled: 'constant',
  },
)
const model = defineModel()

if (props.options?.length > 0) {
  model.value = props.options[0];
}
</script>

<template>
  <div :class="['easy-switchtoggle']">
    <SelectButton
      v-model="model"
      :unselectable="false"
      :options="options"
      :optionDisabled="optionDisabled"
      :option-label="optionLabel"
      :option-value="optionValue"
      aria-labelledby="basic"/>
  </div>
</template>
