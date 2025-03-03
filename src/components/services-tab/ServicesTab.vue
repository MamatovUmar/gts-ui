<script setup lang="ts">
import { computed, useId } from 'vue'
import type { IItem } from 'src/types/ui'
import './ServicesTab.scss'
import { services } from '@/constants/services'
import EasyTabs from '@/components/tabs/EasyTabs.vue'

const props = withDefaults(
  defineProps<{
    locale: 'ru' | 'uz' | 'en'
  }>(),
  {
    locale: 'ru',
  },
)
const transformedItems = computed<IItem[]>(() =>
  services.map(({ label, ...rest }) => ({
    label: label[props.locale as keyof typeof label],
    ...rest,
  })),
)

const model = defineModel()
const id = useId()
</script>

<template>
  <EasyTabs v-model="model" :items="transformedItems"></EasyTabs>
</template>

<style scoped lang="scss"></style>
