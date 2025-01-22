<script setup lang="ts">
import EasyLayout from '@/components/layout/EasyLayout.vue'
import routes from '@/constants/sidebar'
import EasyProfileDropdown from '@/components/header/profile/ProfileDropdown.vue'
import { links, user } from '@/constants';
import { ref } from 'vue';
import EasyPhoneNumber from '@/components/phone/EasyPhoneNumber.vue';

withDefaults(
  defineProps<{
    routePath: string
    isDark?: boolean
  }>(),
  {
    routePath: '/home',
  },
)

const phoneNumber = ref({
  phone_code: '',
  phone_number: '',
})

</script>

<template>
  <div class="layout-page">
    <EasyLayout :routePath :routes="routes" :isDark>
      <template #header>
        <EasyProfileDropdown :user="user" :links="links" />
      </template>

      <div class="blur-block">

        <EasyPhoneNumber v-model="phoneNumber" locale="uz" />


      </div>
    </EasyLayout>
  </div>
</template>
