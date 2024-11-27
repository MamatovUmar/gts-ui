<script setup lang="ts">
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import {computed, useId} from "vue";
import FloatLabel from 'primevue/floatlabel';
import './EasyInput.css';


const model = defineModel<string>({default: ''});
const props = defineProps<{
  label?: string;
  placeholder?: string;
  tabindex?: number;
  readonly?: boolean;
  invalid?: boolean;
  value?: string;
  size?: 'small' | 'medium' | 'large';
  password?: boolean;
  inputMask?: boolean;
  mask?: string;
  uppercase?: boolean;
  copyButton?: boolean;
  searchable?: boolean
}>();

const activeComponent = computed(() => {
  if (props.password) {
    return Password;
  } else if (props.inputMask) {
    return InputMask;
  }
  return InputText;
});

const emit = defineEmits<{
  (e: 'keydown.down', val?: string): void;
  (e: 'keydown.up', val?: string): void;
  (e: 'keydown.enter', val?: string): void;
  (e: 'keydown.tab', val?: string): void;
  (e: 'focus', val?: string): void;
  (e: 'focusout', val?: string): void;
}>();

const id = useId();

const uppercaseModel = computed({
  get() {
    return props.uppercase ? model.value?.toUpperCase() : model.value;
  },
  set(val: string) {
    model.value = val;
  },
});
</script>

<template>
  <FloatLabel :class="['easy-input w-full', props?.size, { 'has-label': props?.label }]">
    <component
      :is="activeComponent"
      :id="id"
      v-model="uppercaseModel"
      :placeholder="props.placeholder"
      :class="{ 'p-invalid': props.invalid }"
      :upperCase="props.uppercase"
      toggleMask
      :feedback="false"
      @keydown.down="emit('keydown.down')"
      @keydown.up="emit('keydown.up')"
      @keydown.enter="emit('keydown.enter')"
      @keydown.tab="emit('keydown.tab')"
      @focus="emit('focus')"
      @focusout="emit('focusout')"
      :tabindex="props.tabindex"
      :readonly="props.readonly"
      autocomplete="off"
      :mask="props.mask"
    />

    <label
      v-if="props?.label"
      :for="id"
    >
      {{ props.label }}
    </label>
    
    <div v-if="props.copyButton || $slots.prefix" class="prefix">
      <slot name="prefix"/>
    </div>
  
  </FloatLabel>
</template>
