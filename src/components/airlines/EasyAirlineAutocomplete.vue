<script setup lang="ts">

import {ref, watch, watchEffect} from "vue";
import {IAirline} from "@/types/autocomplete";
import {useFetch} from "@/composables/useFetch";
import {catcher} from "@/utils/catcher";
import EasyInput from "@/components/input/EasyInput.vue";
import {debounce} from "@/utils/debounce";
import ListBox from 'primevue/listbox'
import './EasyAirlineAutocomplete.scss'

defineProps<{
  label?: string
  placeholder?: string
  prefixIcon?: string
  optionValue?: string
}>()

const { get } = useFetch()

const model = defineModel<string | IAirline>()

const empty = ref(false)
const airlines = ref<IAirline[]>([])
const search = ref()

const getAirlines = catcher(async (val: string) => {
  empty.value = false
  if (!val || val?.length < 2) return
  const { data } = await get<Response<IAirline[]>>(`/airlines/${val}`)
  airlines.value = data
  if (data.length === 0) {
    empty.value = true
  }
})

const findAirlines = debounce(async (val) => {
  await getAirlines(val)
}, 300)

getAirlines('uzbe')

watchEffect(() => {
  if (model.value) search.value = model.value?.name ?? model.value
})
watch(model, () => {
  airlines.value = []
})

interface Response<T> {
  data: T
}

</script>

<template>
  <div class="airline-input-autocomplete relative">
    <EasyInput
      v-model="search"
      :label
      :placeholder
      :prefix-icon="prefixIcon"
      @input="findAirlines(search)"
      @focus="findAirlines(search)"
    />
    <div v-if="airlines.length > 0" class="dropdown">
      <ListBox
        v-model="model"
        :options="airlines"
        optionLabel="name"
        :optionValue
        listStyle="max-height:250px"
      />
    </div>
    <div v-else-if="search && empty" class="dropdown">
      <div class="absolute empty">
        Нет совподений
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
