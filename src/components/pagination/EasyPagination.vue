<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import EasySelect from '../select/EasySelect.vue'
import './EasyPagination.scss'
import Paginator from 'primevue/paginator'
import { watch } from 'vue';

const { perPageOptions = [10, 20, 30, 40, 50], selectPlaceholder = 'Показать по', totalRecords } = defineProps<{
  perPageOptions?: number[]
  selectPlaceholder?: string
  totalRecords?: number
}>()

const page = defineModel({ default: 1 })
const perPage = defineModel('perPage', { default: 10 })

const first = ref(0)

const options = computed(() => {
  return perPageOptions?.map((el) => {
    return { label: el.toString(), value: el }
  })
})

watch([first], () => {
  page.value = first.value / perPage.value + 1
})

watch(perPage, () => {
  if (totalRecords && totalRecords / perPage.value < page.value) {
    page.value = Math.ceil(totalRecords / perPage.value)
  }
  first.value = (page.value - 1) * perPage.value
})

onMounted(() => {
  first.value = (page.value - 1) * perPage.value
})
</script>

<template>
  <div class="easy-pagination">
    <EasySelect v-model="perPage" :options="options" size="small" style="max-width: 200px">
      <template #value="{ value }">
        <span class="easy-pagination__option">{{ selectPlaceholder }} {{ value }}</span>
      </template>
    </EasySelect>

    <Paginator
      v-model:first="first"
      :rows="perPage"
      :totalRecords="totalRecords"
      :rowsPerPageOptions="perPageOptions"
    />
  </div>
</template>

<style lang="scss" scoped></style>
