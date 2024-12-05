<script setup lang="ts">
import {useId} from "vue";
import type {IItems} from "src/types/ui";
import {useClickOutside} from "../../composables/useClickOutside";
import {computed, ref} from "vue";
import './EasySelect.scss';
import Dropdown from "primevue/dropdown";
import FloatLabel from "primevue/floatlabel";

const props = withDefaults(defineProps<{
  options: IItems[]
  label?: string
  size?: 'small' | 'mini' | 'large'
  bordered?: boolean
  invalid?: boolean
  filter?: boolean
  disabled?: boolean,
  optionValue?: string,
  optionLabel?: string,
}>(), {
  size: 'small',
  bordered: false,
  invalid: false,
  filter: false,
  disabled: false,
  optionValue: 'value',
  optionLabel: 'label'
})

const id = useId()
const model = defineModel()

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
  <FloatLabel :class="['easy-select w-full', props.size, {'has-label': props.label}]">

    <Dropdown
      :size="props.size"
      v-model="model"
      :inputId="id"
      :invalid="props.invalid"
      :options="props.options"
      :filter="filter"
      :scroll-height='setSize'
      :optionLabel="optionLabel || 'label'"
      :option-value="optionValue || 'value'"
      :class="['w-full', { bordered }]"
      append-to="self"
      :disabled='disabled'
      :virtualScrollerOptions="{ lazy: true,  itemSize: 45}"
    >
      <template #dropdownicon>
        <i class="icon-Arrow---Down-2-Outline" :class='{"down-icon" : invalid}'></i>
      </template>
    </Dropdown>
    <label v-if="props.label" :for="id">{{ props.label }}</label>
  </FloatLabel>

</template>
