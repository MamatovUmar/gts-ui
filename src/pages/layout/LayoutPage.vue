<script setup lang="ts">
import EasyLayout from '@/components/layout/EasyLayout.vue'
import routes from '@/constants/sidebar'
import EasyProfileDropdown from '@/components/header/profile/ProfileDropdown.vue'
import { links, user } from '@/constants';
import { reactive, ref } from 'vue';
import EasyPagination from '@/components/pagination/EasyPagination.vue';
import { LocaleTypes } from '@/types';
import { EasyCountry } from '@/index';

withDefaults(
  defineProps<{
    routeName: string
    isDark?: boolean
  }>(),
  {
    routeName: 'settings/route-receipt',
  },
)

const params = reactive({
  page: 1,
  per_page: 1,
  provider_id: undefined,
  supplier_id: undefined,
  status: undefined,
  type: undefined,
  code: undefined,
})

const locale = ref<LocaleTypes>('ru')

const country = ref('')

</script>

<template>
  <div class="layout-page">
    <EasyLayout :routeName :routes="routes" :isDark :locale="locale">
      <template #header>
        <EasyProfileDropdown :user="user" :links="links" />
      </template>

      <div class="blur-block">

        <EasyPagination :total-records="30" v-model:per-page="params.per_page" v-model="params.page" />

        <br>

        <EasyCountry v-model="country" />

      </div>
    </EasyLayout>
  </div>
</template>
