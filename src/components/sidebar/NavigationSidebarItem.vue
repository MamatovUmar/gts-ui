<script lang="ts" setup>
import OverlayPanel from 'primevue/overlaypanel'
import { ref, watch } from 'vue'
import NavigationSidebarDropdown from './NavigationSidebarDropdown.vue'
import { ISidebarItem } from '@/types/ui';

const op = ref()

const props = defineProps<{
  routeItem: ISidebarItem,
  isChild: boolean,
  routePath: string,
  short: boolean
}>()

function isActive(path: string) {
  return props.routePath.startsWith(path)
}

function getIcon(route: ISidebarItem) {
  return isActive(route.path) ? route.activeIcon : route.icon
}

function toggle(event: unknown) {
  op.value.toggle(event)
}

watch(() => props.routePath, () => {
  op.value.hide()
})

</script>

<template>

  <template v-if="routeItem">
    <div
      v-if="short && routeItem?.children"
      :class="['navigation-sidebar__link', { active: routePath.includes(routeItem.path) }]"
      @click="toggle"
    >
        <i v-if="routeItem?.icon" :class="[getIcon(routeItem), 'navigation-sidebar__icon']"></i>
        <i
          v-if="short && routeItem?.children"
          class="icon-more-vertical navigation-sidebar__more">
        </i>
    </div>

    <NavigationSidebarDropdown
      v-else-if="isChild && routeItem?.children"
      expand
      :item="routeItem"
      :routePath
    />

    <router-link
      v-else
      v-tooltip="{value: routeItem.label, disabled: !short || !!routeItem?.children}"
      :to="routeItem.path"
      :class="['navigation-sidebar__link', { 'active': isActive(routeItem.path)}, {'pointer-events-none' : routeItem.disabled}]">
      <i v-if="routeItem?.icon" :class="[getIcon(routeItem), 'navigation-sidebar__icon']"></i>
      <span v-if="!short">{{ routeItem.label }}</span>
    </router-link>

    <OverlayPanel ref="op" append-to="self" class="sidebar-op">
      <section v-if="routeItem?.children" class="sidebar-short-items">
        <template v-for="(item, j) of routeItem.children" :key="`${j}-${item.path}`">
          <NavigationSidebarDropdown v-if="item?.children" :item="item" :routePath="routePath" />
          <router-link
            v-else-if="item.path"
            :to="item.path"
            :class="['sidebar-short-items__link', { active: isActive(item?.path) }]"
          >
            {{ item.label }}
          </router-link>
          <div v-else class="sidebar-short-items__link disabled">
            {{ item.label }}
          </div>
        </template>
      </section>
    </OverlayPanel>
  </template>
</template>

<style lang="scss">


</style>
