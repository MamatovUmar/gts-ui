<script setup lang="ts">
import Textarea from "primevue/textarea";
import "./EasyTextarea.scss"

const model = defineModel<string>({default: ""});

const props = defineProps<{
  placeholder?: string;
  tabindex?: number;
  invalid?: boolean;
  rows?: number;
  disabled?: boolean;
  readonly?: boolean
}>();
const emit = defineEmits<{
  (e: 'keydown.down', val?: string): void;
  (e: 'keydown.up', val?: string): void;
  (e: 'keydown.enter', val?: string): void;
  (e: 'keydown.tab', val?: string): void;
  (e: 'focus', val?: string): void;
  (e: 'focusout', val?: string): void;
}>();


</script>

<template>
      <Textarea
        v-model="model"
        :rows="props.rows"
        auto-resize
        :placeholder="props.placeholder"
        :readonly="readonly"
        :disabled="props.disabled"
        class="w-full"
        :tabindex="props.tabindex"
        :invalid="props.invalid"
        @keydown.down="emit('keydown.down')"
        @keydown.up="emit('keydown.up')"
        @keydown.enter="emit('keydown.enter')"
        @keydown.tab="emit('keydown.tab')"
        @focus="emit('focus')"
        @focusout="emit('focusout')"
      />
</template>

<style lang="scss">

</style>
