<script setup lang="ts">
import Dialog from 'primevue/dialog'
import './EasyModal.scss'

const emit = defineEmits(['close'])

const model = defineModel<boolean>({ default: false })

const { maxWidth, noScroll = false, dismissableMask = true, showHeader = true } = defineProps<{
  maxWidth?: string
  title?: string
  backgroundColor?: string
  hideClose?: boolean
  noScroll?: boolean
  showHeader?: boolean
  maximizable?: boolean
  dismissableMask?: boolean
}>()

</script>

<template>
  <Dialog
    v-model:visible="model"
    modal
    :class="['easy-modal', { 'no-scroll': noScroll }]"
    draggable
    :style="{ maxWidth, backgroundColor }"
    :closable="false"
    :maximizable="maximizable"
    :dismissable-mask="dismissableMask"
    :show-header="showHeader"
    :header="title"
    @hide="emit('close')"
  >
    <div v-if="!hideClose" class="close center pointer" @click="model = false">
      <i class="icon-Close-2"></i>
    </div>
    <template #header>
      <slot name="header" />
    </template>
    <slot />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facere illum error sit obcaecati fugit minima numquam nemo quo quod, quae quibusdam pariatur corporis eius hic eveniet sapiente aliquam laborum.
    <template v-if="$slots?.footer" #footer>
      <slot name="footer" />
      sadfsdf
    </template>
  </Dialog>
</template>
