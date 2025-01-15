<script setup lang="ts">
import EasyDropdown from "@/components/dropdown/EasyDropdown.vue";
import EasyButton from "@/components/button/EasyButton.vue";
import EasyIcon from "@/components/icon/EasyIcon.vue";
import EasySwitchToggle from "@/components/switchtoggle/EasySwitchToggle.vue";
import { IItem } from "@/types/ui";
import { ref } from "vue";

import "./EasyLanguageCurrencyDropdown.scss";
import { ICurrency } from "@/types/autocomplete";

defineProps<{ currencies: ICurrency[] }>();
const selCurrency = defineModel("currency", { default: "EUR" });
const locale = defineModel("locale", { default: "UZB" });

const options: IItem[] = [
  { label: "Язык", value: "language" },
  { label: "Валюта", value: "currency" },
];

const languages: IItem[] = [
  { label: "O'zbekcha", value: "UZB", icon: "icon-uzbekistan" },
  { label: "English", value: "ENG", icon: "icon-united-kingdom" },
  { label: "Русский", value: "RUS", icon: "icon-russia" },
];

const value = ref<IItem>();
const isOpen = ref(false);

function selectLanguage(language: IItem) {
  locale.value = language.value as string;
}

function selectCurrency(currency: ICurrency) {
  if (!currency.disabled) {
    selCurrency.value = currency.base;
  }
}
</script>

<template>
  <EasyDropdown @toggle="isOpen = $event">
    <template #trigger>
      <EasyButton
        size="sm"
        plain
        icon="icon-Global"
        :label="`${selCurrency} • ${locale}`"
        aria-label="Выбор языка и валюты"
        :class="{ isOpen }"
      />
    </template>

    <template #default>
      <EasySwitchToggle :options="options" v-model="value" :style="{ marginBottom: '8px' }" />
      <div class="wrapper">
        <template v-if="value?.value === 'language'">
          <div
            v-for="language in languages"
            :key="language.value"
            class="option"
            :class="{ active: language.value === locale }"
            @click="selectLanguage(language)"
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
            :class="{ disabled: currency.disabled, active: currency.base === selCurrency }"
            @click="selectCurrency(currency)"
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
