<script setup lang="ts">
import {useId} from "vue";
import type {IItem} from "src/types/ui";
import './EasyTabs.scss'

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
    <template v-for="item of items" :key="item.value">
      <input
        v-model="model"
        :value="item.value"
        :name="id"
        :id="`${id}${item.value}`"
        type="radio"
        class="input"
      />
      <label :for="`${id}${item.value}`" :class="['label', { disabled: item?.disabled }]">
        <i v-if="item?.icon" :class="item.icon"></i>
        {{ item.label }}
      </label>
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>
