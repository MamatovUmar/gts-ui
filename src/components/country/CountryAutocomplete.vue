<script setup lang="ts">
import { ref, watchEffect, watch } from 'vue'
import { ICountry } from '@/types/autocomplete'
import { useFetch } from '@/composables/useFetch'
import { catcher } from '@/utils/catcher'
import EasyInput from '@/components/input/EasyInput.vue'
import { debounce } from '@/utils/debounce'
import ListBox from 'primevue/listbox'
import './CountryAutocomplete.scss'
import { useClickOutside } from '@/composables/useClickOutside'

const {
  size = 'large',
  optionLabel = 'country_rus',
  emptyText = 'Нет совподений',
} = defineProps<{
  label?: string
  placeholder?: string
  prefixIcon?: string
  optionLabel?: keyof ICountry
  emptyText?: string
  size?: 'small' | 'large'
}>()

const { get } = useFetch()

const model = defineModel<ICountry>()

const dpRef = ref<HTMLElement>()
const loading = ref(false)
const empty = ref(false)
const open = ref(false)
const invalid = ref(false)
const countries = ref<ICountry[]>([])
const search = ref()

const getCountries = catcher(async (val: string) => {
  empty.value = false
  if (!val || val?.length < 2) return
  loading.value = true
  const { data } = await get<Response<ICountry[]>>(`/country/${val}`)
  loading.value = false
  open.value = true

  countries.value = data
  if (data.length === 0) {
    empty.value = true
  }
})

const fetchData = debounce(getCountries, 400)

useClickOutside(dpRef)

function isValid() {
  invalid.value = search.value?.length && countries.value.length === 0
}

watchEffect(() => {
  if (model.value) {
    search.value = model.value[optionLabel]
    open.value = false
    countries.value = []
  }
})

watch(model, (val, oldVal) => {
  if (val === null) model.value = oldVal
})

interface Response<T> {
  data: T
}
</script>

<template>
  <div class="country-autocomplete relative" ref="dpRef" @clickOutside="open = false">
    <EasyInput
      v-model="search"
      :label
      :placeholder
      :prefix-icon="prefixIcon"
      :loading
      :invalid
      :size
      @input="fetchData(search)"
      @focus="fetchData(search)"
      @focusout="isValid"
    />
    <div v-if="countries.length > 0 && open" class="dropdown">
      <ListBox v-model="model" :options="countries" :optionLabel="optionLabel" listStyle="max-height:250px" />
    </div>
    <div v-else-if="search && empty && open" class="dropdown">
      <div class="absolute empty">{{ emptyText }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.country-icon {
  height: 20px;
}
</style>
