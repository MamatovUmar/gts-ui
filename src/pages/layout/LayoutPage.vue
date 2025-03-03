<script setup lang="ts">
import EasyLayout from '@/components/layout/EasyLayout.vue'
import routes from '@/constants/sidebar'
import EasyProfileDropdown from '@/components/header/profile/ProfileDropdown.vue'
import { links, user } from '@/constants';
import { ref } from 'vue';
import { EasyCountry } from '@/index';

withDefaults(
  defineProps<{
    routePath: string
    isDark?: boolean
  }>(),
  {
    routePath: '/home',
  },
)

const country = ref('UZ')

</script>

<template>
  <div class="layout-page">
    <EasyLayout :routePath :routes="routes" :isDark>
      <template #header>
        <EasyProfileDropdown :user="user" :links="links" />
      </template>

      <div class="blur-block">
        {{ country }}

        <EasyCountry v-model="country" label="Country" />


      </div>
    </EasyLayout>
  </div>
</template>
