<script setup lang="ts">
import EasyBackground from '@/components/background/EasyBackground.vue';
import EasyLayout from '@/components/layout/EasyLayout.vue';
import NavigationSidebar from '@/components/sidebar/NavigationSidebar.vue';
import routes from '@/constants/sidebar';

withDefaults(
  defineProps<{
    routePath: string;
    isDark?: boolean;
  }>(),
  {
    routePath: '/settings/exchange-rates',
  },
);

</script>

<template>
  <div class="layout-page">
    <EasyLayout>
      <EasyBackground />

      <NavigationSidebar
        :routePath
        :routes="routes"
        :isDark
      />
    </EasyLayout>
  </div>
</template>
