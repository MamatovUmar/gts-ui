<script setup lang="ts">
import Textarea from "primevue/textarea";
import "./EasyTextarea.scss"

import {computed} from "vue";

const model = defineModel<string>({default: ""});

const props = defineProps<{
  placeholder?: string;
  tabindex?: number;
  invalid?: boolean;
  rows?: number;
  disabled?: boolean;
}>();

const notValid = computed(() => {
  return props.invalid ? "2px solid var(--red-500)" : "2px solid var(--teal-500)"
})

const isDisabled = computed(() => {
  return props.disabled ? "var(--cadet-blue-200)" : "--neutral-0"
})

</script>

<template>
  <div :class="['easy-textarea']">
      <Textarea
        v-model="model"
        :rows="props.rows"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        class="w-full"
        :tabindex="props.tabindex"
        :invalid="props.invalid"/>
  </div>
</template>

<style lang="scss">
.easy-textarea {
  .p-inputtextarea.p-inputtext:enabled:focus {
    outline: v-bind(notValid);
  }
  .p-inputtext {
    background-color: v-bind(isDisabled);
  }
}
</style>
