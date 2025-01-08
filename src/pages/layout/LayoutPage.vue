<script setup lang="ts">
import EasyLayout from '@/components/layout/EasyLayout.vue'
import routes from '@/constants/sidebar'

withDefaults(
  defineProps<{
    routePath: string
    isDark?: boolean
  }>(),
  {
    routePath: '/home',
  },
)
</script>

<template>
  <div class="layout-page">
    <EasyLayout :routePath :routes="routes" :isDark>
      <template #header>
        <span>Header</span>
      </template>

      <div class="blur-block">dfgd</div>
    </EasyLayout>
  </div>
</template>
