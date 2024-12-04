<script setup lang="ts">
import './EasyLoader.scss';
import {computed} from "vue";

const props = withDefaults(defineProps<{
  size?: string
  borderWidth?: string
  borderColor?: string
  borderTopColor?: string
}>(), {
  size: 'large',
  borderColor: 'var(--alpha-neutral200a)',
  borderTopColor: 'var(--grey-500)'
})

function chooseColor(colorName) {
  switch (colorName) {
    case 'xsmall':
      return {size: 8, borderWidth: 1}
    case 'small':
      return {size: 16, borderWidth: 2}
    case 'medium':
      return {size: 24, borderWidth: 3}
    case 'large':
      return {size: 48, borderWidth: 4}
    case 'xlarge':
      return {size: 96, borderWidth: 5}
    default :
      return {size: colorName, borderWidth: Math.floor(colorName * 0.1) || 1}
  }
}

const style = computed(() => ({
  width: `${chooseColor(props.size).size}px`,
  height: `${chooseColor(props.size).size}px`,
  'border-width': props.borderWidth ? `${props.borderWidth}px` : `${chooseColor(props.size).borderWidth}px`,
  'border-color': props.borderColor,
  'border-top-color': props.borderTopColor
}));
</script>

<template>
  <div class="loader" :style="style"></div>
  {{ borderWidth }}
</template>
