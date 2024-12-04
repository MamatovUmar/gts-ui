<script setup lang="ts">
import Dialog from 'primevue/dialog';
import "./EasyModal.scss";

const emit = defineEmits(['close'])

const model = defineModel<boolean>({default: false})

const {maxWidth, noScroll = false} = defineProps<{
  maxWidth?: string
  title?: string
  whiteBg?: boolean
  hideClose?: boolean
  noScroll?: boolean
}>()

</script>

<template>
  <Dialog
    v-model:visible="model"
    modal
    :class="['easy-modal', {'white-bg': whiteBg, 'no-scroll': noScroll}]"
    draggable
    :style="{maxWidth}"
    :show-header="false"
    block-scroll
    @hide="emit('close')">

    <div v-if="!hideClose" class="close center pointer" @click="model = false">
      <i class="icon-Close-2"></i>
    </div>
    <div class="header">
      <div v-if="!$slots.header && title" class="title">{{ title }}</div>
    </div>

    <slot/>
  </Dialog>
</template>

