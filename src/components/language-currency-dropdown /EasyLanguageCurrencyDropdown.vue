<script setup lang="ts">

import EasyDropdown from "@/components/dropdown/EasyDropdown.vue";
import EasyButton from "@/components/button/EasyButton.vue";
import EasyIcon from "@/components/icon/EasyIcon.vue";
import EasySwitchToggle from "@/components/switchtoggle/EasySwitchToggle.vue";
import {IItem} from "@/types/ui";
import {ref} from "vue";

import './EasyLanguageCurrencyDropdown.scss'
import {ICurrency} from "@/types/autocomplete";

const {currencies, currency: selCurrency} = defineProps<{currencies: ICurrency[], locale: string, currency: string}>();
const emit = defineEmits(['currency', 'locale']);

const options: IItem[] = [
  {
    label: 'Язык',
    value: 'language'
  },
  {
    label: 'Валюта',
    value: 'currency',
  }
];

const languages:IItem[] = [
  {
    label: "O'zbekcha",
    value: 'uz',
    icon: 'icon-uzbekistan'
  },
  {
    label: 'English',
    value: 'en',
    icon: 'icon-united-kingdom'
  },
  {
    label: 'Русский',
    value: 'ru',
    icon: 'icon-russia'
  }
]

const value = ref<IItem>();

</script>

<template>
  <EasyDropdown>
    <template #trigger>
      <EasyButton size="sm" outlined icon="icon-Global" label="RUB • UZB" aria-label="Выбор языка и валюты"/>
    </template>

    <template #default>
      <EasySwitchToggle :options="options" v-model="value" :style="{margin: '0.75rem', marginTop: '0'}"/>
      <div class="wrapper">
          <template v-if="value?.value === 'language'">
            <div
              v-for="language in languages"
              :key="language.value"
              class="option"
              :class="{'active': language.value === locale}"
              @click="emit('locale', language.value)"
            >
              <EasyIcon :name="String(language.icon)" :size="24" />
              <p>{{ language.label }}</p>
            </div>
          </template>
          <template v-else>
            <p
              class="option"
              v-for="currency in currencies"
              :key="currency.base"
              :class="{ disabled: currency.disabled, 'active': currency.base === selCurrency }"
              @click="!currency.disabled && emit('currency', currency.base)"
            >
              {{ currency.base }}
            </p>
          </template>
      </div>
    </template>
  </EasyDropdown>
</template>

<style scoped lang="scss">
</style>
