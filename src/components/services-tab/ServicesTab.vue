<script setup lang="ts">
import { useId } from 'vue'
import type { IItem } from 'src/types/ui'
import './ServicesTab.scss'
import { services } from '@/constants/services'
import EasyTabs from '@/components/tabs/EasyTabs.vue'

const props =withDefaults(
  defineProps<{
    locale: 'ru' | 'uz' | 'en'
    big?: boolean
  }>(),
  {
    big: false,
    locale: 'ru'
  },
)
const transformedItems = services.map(({ label, ...rest }) => ({
  label: label[props.locale as keyof typeof label], // ✅ Указываем явно
  ...rest
}));
const model = defineModel()
const id = useId()
</script>

<template>
  <EasyTabs :items="transformedItems"></EasyTabs>
</template>

<style scoped lang="scss"></style>
