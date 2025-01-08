<template>
  <nav class="breadcrumb" aria-label="breadcrumb">
    <ol class="breadcrumb-list">
      <li class="breadcrumb-item home-icon">
        <a href="/" @click.prevent="navigate({ label: 'Home', href: '/' })" class="icon-Home">
          <i class="fas fa-home"></i>
        </a>
      </li>
      <li
        v-for="(item, index) in items"
        :key="index"
        class="breadcrumb-item"
        :class="{ 'is-active': index === items.length - 1 }">
        <a
          v-if="index !== items.length - 1"
          :href="item.href"
          @click.prevent="navigate(item)">
          {{ item.label }}
        </a>
        <span v-else>{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import {defineProps, type PropType, defineEmits} from 'vue';

interface BreadcrumbItem {
  label: string;
  href: string;
}

const props = defineProps({
  items: {
    type: Array as PropType<BreadcrumbItem[]>,
    required: true,
  },
});

const emit = defineEmits(['navigate']);

function navigate(item: BreadcrumbItem) {
  emit('navigate', item);
}
</script>

<style scoped lang="scss">
.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--grey-300);

  .breadcrumb-list {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;

    .breadcrumb-item {
      display: flex;
      align-items: center;

      &.home-icon {
        font-size: 16px;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--grey-300);
          text-decoration: none;

          i {
            font-size: 18px;
          }
        }
      }

      &:not(:last-child)::after {
        content: '/';
        margin: 0 8px;
        color: var(--grey-300);
      }

      a {
        text-decoration: none;
        color: var(--grey-300);
      }

      &.is-active span {
        color: var(--grey-200);
      }
    }
  }
}
</style>
