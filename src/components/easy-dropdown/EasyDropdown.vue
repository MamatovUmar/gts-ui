<script setup lang="ts">
import OverlayPanel from 'primevue/overlaypanel';
import {useRoute} from "vue-router";
import {ref, watch} from "vue";
import './EasyDropdown.scss'


const props = defineProps<{
  value?: string
  bgWhite?: boolean
  bgColor?: string
}>()

const emit = defineEmits<{
  (e: 'toggle', val: boolean): void
}>()

const route = useRoute()

const op = ref<OverlayPanel>()

function toggle(event: Event) {
  op.value?.toggle(event);
}

watch([() => route?.name, () => props.value], ()=> {
  op.value?.hide()
})

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
      :class="{bgWhite}"
      :style="{ background: bgColor }"
    >
      <slot :op="op" />
    </OverlayPanel>
  </div>
</template>
