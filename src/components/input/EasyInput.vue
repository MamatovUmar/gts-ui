<script setup lang="ts">
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import {computed} from "vue";
import CopyIcon from "~/icon-components/CopyIcon.vue";
import {toClipboard} from '@soerenmartius/vue3-clipboard';
import {useToast} from "primevue/usetoast";

const model = defineModel<string>({default: ''});
const toast = useToast();
const props = defineProps<{
  label?: string;
  placeholder?: string;
  tabindex?: number;
  readonly?: boolean;
  invalid?: boolean;
  value?: string;
  size?: 'small' | 'mini' | 'large';
  password?: boolean;
  inputMask?: boolean;
  mask?: string;
  bordered?: boolean;
  uppercase?: boolean;
  copyButton?: boolean;
  searchible?: boolean
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

function copy() {
  toClipboard(model.value);
  toast.add({
    severity: 'success',
    summary: 'Copied',
    life: 3000,
  });
}

const uppercaseModel = computed({
  get() {
    return props.uppercase ? model.value.toUpperCase() : model.value;
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
        :invalid="props.invalid"
        toggleMask
        :feedback="false"
        :class="['w-full', { bordered: props.bordered }]"
        @keydown.down="emit('keydown.down')"
        @keydown.up="emit('keydown.up')"
        @focus="emit('focus')"
        @focusout="emit('focusout')"
        :tabindex="props.tabindex"
        :readonly="props.readonly"
        autocomplete="off"
        :mask="props.mask"/>

    <label
        v-if="props?.label"
        :for="id">
        {{ props.label }}

    </label>
    <!--    <div class="prefix">-->
    <!--      <CopyIcon-->
    <!--        v-if="props.copyButton"-->
    <!--        class="pointer"-->
    <!--        @click="copy"-->
    <!--      />-->
    <!--      <slot name="prefix"/>-->
    <!--    </div>-->
  </FloatLabel>
</template>
