<script setup lang="ts">
import Dialog from 'primevue/dialog';
import "./EasyModal.scss";
import {computed} from "vue";

const emit = defineEmits(['close']);

// Use withDefaults to set default values
const props = withDefaults(
  defineProps<{
    maxWidth?: string;
    title?: string;
    bgColor?: string;
    closable?: boolean;
    noScroll?: boolean;
    showHeader?: boolean,
    text?: string
  }>(),
  {
    maxWidth: '600px',
    bgColor: "var(--base-white)", // Default background color
    closable: true,
    noScroll: false,
    showHeader: false
  }
);
const borderColor = computed(()=> props.bgColor)
const model = defineModel<boolean>({default: false});
</script>

<template>
  <Dialog
    v-model:visible="model"
    modal
    :class="['easy-modal', { 'no-scroll': props.noScroll }]"
    :style="{ maxWidth: props.maxWidth, backgroundColor: `var(${props.bgColor})` }"
    :show-header="false"
    block-scroll
    @hide="emit('close')">

<template #default>

  <div v-if="props.closable" class="close center pointer" @click="model = false">
    <i class="icon-Close-2"></i>
  </div>

  <div class="header" v-if="props.showHeader">
    <div v-if="!$slots.header && title" class="title">{{ title }}</div>
    <div v-if="!$slots.header && text" class="text">{{ text }}</div>
  </div>

  <slot name="default" />
</template>

  </Dialog>
</template>

<style lang="scss" scoped>
.p-dialog{
  border-style :solid;
  border-color: v-bind(borderColor);
  border-width: 1px;
}
</style>


