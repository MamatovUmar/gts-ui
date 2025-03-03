<script setup lang="ts">
import {useId} from "vue";
import type {IItem} from "src/types/ui";
import './EasyTabs.scss'
import EasyIcon from "../icon/EasyIcon.vue";

withDefaults(defineProps<{
  items: IItem[]
  big?: boolean
}>(), {
  big: false
})

const model = defineModel()
const id = useId()

</script>

<template>
  <div :class="['easy-tabs', { big }]" :style="`--count: ${items.length};`">
    <template  v-for="item of items" :key="item.value">
      <input
        v-model="model"
        :value="item.value"
        :name="id"
        :id="`${id}${item.value}`"
        type="radio"
        class="input"
      />
      <label :for="`${id}${item.value}`" :class="['label', { disabled: item?.disabled }]">
        <EasyIcon v-if="item?.icon" :name="item.icon" :size="24"></EasyIcon>
        <span v-html="item.label"/>
      </label>
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>
