<script setup lang="ts">
import EasyLayout from '@/components/layout/EasyLayout.vue'
import routes from '@/constants/sidebar'
import EasyProfileDropdown from '@/components/header/profile/ProfileDropdown.vue'
import { links, user } from '@/constants';
import { reactive, ref } from 'vue';
import EasyPagination from '@/components/pagination/EasyPagination.vue';
import { LocaleTypes } from '@/types';
import { EasyCountry } from '@/index';
import EasyAirportAutocomplete from '@/components/airports/EasyAirportAutocomplete.vue';
import { IAirport } from '@/types/autocomplete';

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
const airport = ref<IAirport>()

function logOut() {
  console.log(123132)
}

</script>

<template>
  <div class="layout-page">
    <EasyLayout :routeName :routes="routes" :isDark :locale="locale" @log-out="logOut">
      <template #header>
        <EasyProfileDropdown :user="user" :links="links" />
      </template>

      <div class="blur-block" style="padding: 16px;">

        <EasyPagination :total-records="30" v-model:per-page="params.per_page" v-model="params.page" />

        <br>

        <EasyCountry v-model="country" label="Country" />
        <br>
        <EasyAirportAutocomplete v-model="airport" label="Airport" />

        {{ airport }}
      </div>
    </EasyLayout>
  </div>
</template>
