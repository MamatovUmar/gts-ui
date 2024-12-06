<script setup lang="ts">
import OverlayPanel from 'primevue/overlaypanel';
import {ref} from "vue";
import './EasyDropdown.scss'


const props = defineProps<{
  value?: string
  bgColor?: string
}>()

const emit = defineEmits<{
  (e: 'toggle', val: boolean): void
}>()


const op = ref<OverlayPanel>()

function toggle(event: Event) {
  op.value?.toggle(event);
}

</script>

<template>
  <div class="easy-dropdown">
    <div @click="toggle" class="no-select trigger">
      <slot name="trigger" />
    </div>
    <OverlayPanel
      ref="op"
      @show="emit('toggle', true)"
      @hide="emit('toggle', false)"
      :style="{ background: props.bgColor }"
    >
      <slot :op="op" />
    </OverlayPanel>
  </div>
</template>
