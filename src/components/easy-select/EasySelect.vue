<script setup lang="ts">
import {useId} from "#imports";
import type {IItems} from "~/types/ui";
import {useClickOutside} from "~/composables/useClickOutside";
import {computed, ref} from "vue";

const props = defineProps<{
  options: IItems[]
  label?: string
  size?: 'small' | 'mini' | 'large'
  bordered?: boolean
  invalid?: boolean
  filter?: boolean
  disabled?: boolean,
  optionValue?: string
}>()

const id = useId()
const model = defineModel()

const dpRef = ref<HTMLElement>()

const setSize = computed(() => {
  if (props.options?.length > 4) {
    return '200px'
  } else {
    let h = props.options?.length * 45 + 8
    return `${h}px`
  }
})
useClickOutside(dpRef)
</script>

<template>
  <FloatLabel :class="['easy-select w-full', props.size, {'has-label': props.label}]">

    <Dropdown
      v-model="model"
      :inputId="id"
      :invalid="props.invalid"
      :options="props.options"
      :filter="filter"
      :scroll-height='setSize'
      optionLabel="label"
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
