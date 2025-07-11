<script setup lang="ts">
import { computed, ComputedRef, inject } from 'vue'
import type { IItem } from 'src/types/ui'
import './ServicesTab.scss'
import { services } from '@/constants/services'
import EasyTabs from '@/components/tabs/EasyTabs.vue'
import { EnvTypes, LocaleTypes, ServicesTypes } from '@/types'

const props = withDefaults(
  defineProps<{
    locale: LocaleTypes
  }>(),
  {
    locale: 'ru',
  },
)


const env = inject<ComputedRef<EnvTypes>>('env')

const transformedItems = computed<IItem[]>(() =>
  services.map(({ label, ...rest }) => ({
    label: label[props.locale],
    ...rest,
    disabled: !rest.env?.includes(env?.value as EnvTypes),
  })),
)

const model = defineModel<ServicesTypes>()
</script>

<template>
  <EasyTabs v-model="model" :items="transformedItems"></EasyTabs>
</template>

<style scoped lang="scss">

</style>
