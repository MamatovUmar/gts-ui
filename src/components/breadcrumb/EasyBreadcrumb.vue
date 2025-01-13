<template>
  <div class="easy-breadcrumb" :class="{withoutBg}">
    <Breadcrumb :home="home" :model="items">
      <template #item="{item}">
        <a v-if="item?.icon" :class="[home?.icon, 'home']" :href="item.route"/>
        <a v-if="item?.route" class="link" :href="item.route">
          {{ item.label }}
        </a>
        <span v-else class="last">
          {{ item.label }}
        </span>
      </template>

      <template #separator>
        <span class="icon-Arrow---Right-2-Outline"/>
      </template>

    </Breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import Breadcrumb from 'primevue/breadcrumb';
import type {BreadcrumbItem, BreadcrumbHomeItem} from '@/types/ui';
import "./EasyBreadcrumb.scss";


defineProps<{
  items: BreadcrumbItem[],
  home?: BreadcrumbHomeItem,
  withoutBg?: boolean
}>()

</script>


