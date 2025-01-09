<script setup lang="ts">
import EasyLayout from '@/components/layout/EasyLayout.vue'
import routes from '@/constants/sidebar'
import EasyProfileDropdown from '@/components/header/profile/ProfileDropdown.vue'
import { links, user } from '@/constants';

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
        <EasyProfileDropdown :user="user" :links="links" />
      </template>

      <div class="blur-block">dfgd</div>
    </EasyLayout>
  </div>
</template>
