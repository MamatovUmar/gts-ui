<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import NavigationSidebarItem from './NavigationSidebarItem.vue'
import ScrollPanel from 'primevue/scrollpanel'
import { ISidebarItem } from '@/types/ui'
import './NavigationSidebar.css'

const dipLogo = 'https://api.globaltravel.space/media/imgs/logo/dip-logo.png'
const logo = 'https://api.globaltravel.space/media/imgs/logo/logo.svg'
const shortLogo = 'https://api.globaltravel.space/media/imgs/logo/short-logo.svg'
const darkModeLogo = 'https://api.globaltravel.space/media/imgs/logo/dark-logo.svg'

const props = withDefaults(defineProps<{
  baseRoute?: string
  isDark?: boolean
  routeName: string
  routes: ISidebarItem[]
  titleText?: string
  logoutText?: string
}>(), {
  baseRoute: '/home',
  titleText: 'Меню',
  logoutText: 'Выйти',
})

const emit = defineEmits<{
  (e: 'logOut'): void
}>()

const short = defineModel<boolean>('short', {default: false})

const isDipavia = window.location.href.includes('dipavia.uz')

const parentRoute = ref(false)
const routes = ref(props.routes)

const appLogo = computed(() => {
  if (short.value) {
    return shortLogo
  }
  return props.isDark ? darkModeLogo : logo
})


watchEffect(() => {
  const found = props.routes.find((el) =>{
    return el.pages?.includes(props.routeName)
  })
  if (found?.children && !short.value) {
    parentRoute.value = true
    routes.value = found.children
  } else {
    parentRoute.value = false
    routes.value = props.routes
  }
})

</script>

<template>
  <aside :class="['navigation-sidebar', { short }]">
    <section class="navigation-sidebar__header">
      <a :href="baseRoute">
        <img v-if="isDipavia" :src="dipLogo" alt="" />
        <img v-else :src="appLogo" alt="" />
      </a>

      <i class="icon-Outline-Arrow-LeftSquare toggle text-dark" @click="short = !short"></i>
    </section>

    <ScrollPanel class="scroll-height">
      <section class="navigation-sidebar__body">
        <a
          v-if="parentRoute && !short"
          :href="baseRoute"
          class="navigation-sidebar__link disable"
          v-tooltip="{ value: 'Вернуться к проекту', disabled: !short }"
        >
          <i class="icon-Outline-Arrow-LeftCircle navigation-sidebar__icon text-text-subtle"></i>
          <span class="text-text-subtle" v-if="!short">Вернуться к проекту</span>
        </a>

        <div v-else class="navigation-sidebar__link disable text-text-subtle">
          {{ titleText }}
        </div>

        <template v-for="(routeItem, i) of routes" :key="`${i}-${routeItem.path}`">
          <NavigationSidebarItem
            :route-item="routeItem"
            :is-child="parentRoute && !short"
            :routeName="routeName"
            :short
          />
        </template>
      </section>

      <section class="navigation-sidebar__footer">
        <div
          class="navigation-sidebar__link"
          v-tooltip="{ value: logoutText, disabled: !short }"
          @click="emit('logOut')"
        >
          <i class="icon-Outline-Logout"></i>
          <span v-if="!short">{{ logoutText }}</span>
        </div>
      </section>
    </ScrollPanel>
  </aside>
</template>

<style lang="scss">

</style>
