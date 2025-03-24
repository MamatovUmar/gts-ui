<script lang="ts" setup>
import { ISidebarItem } from '@/types/ui'
import EasyBackground from '../background/EasyBackground.vue'
import NavigationSidebar from '../sidebar/NavigationSidebar.vue'
import { useWindowSize } from '../../composables/useWindowSize'
import { ref, watch, provide, computed } from 'vue'
import { LocaleTypes } from '@/types'

const props = defineProps<{
  routeName: string
  isDark?: boolean
  routes: ISidebarItem[]
  locale: LocaleTypes
}>()

const emit = defineEmits<{
  (e: 'logOut'): void
}>()

const { width } = useWindowSize()

provide('locale', computed(() => props.locale))

const short = ref(false)
const logoBaseUrl = 'https://api.globaltravel.space/media/imgs/footer'

function sidebarToggle() {
  if (width.value < 1420 && !short.value) {
    short.value = true
  } else if (width.value >= 1420 && short.value) {
    short.value = false
  }
}

sidebarToggle()

watch(width, () => {
  sidebarToggle()
})
</script>

<template>
  <div :class="['easy-layout', { short }]">
    <EasyBackground />

    <NavigationSidebar v-model:short="short"  :routeName  :routes="routes" :isDark :logOut="emit('logOut')" />

    <div class="easy-layout__content">
      <div class="easy-layout__header">
        <slot name="header"></slot>
      </div>

      <div class="easy-layout__body">
        <div class="easy-layout__body-inner">
            <div class="easy-layout__scrollbar scrollbar">
              <slot></slot>
            </div>
        </div>
      </div>

      <div class="easy-layout__footer">
        <div class="partners-logo">
          <img :src="`${logoBaseUrl}/${isDark ? 'dark' : 'light'}/iata-logo.svg`" alt="iata" />
          <img :src="`${logoBaseUrl}/${isDark ? 'dark' : 'light'}/tcp-logo.svg`" alt="iata" />
          <img :src="`${logoBaseUrl}/${isDark ? 'dark' : 'light'}/payments.svg`" alt="iata" />
        </div>

        <div class="copyright">© Easybooking.uz | All rights reserved</div>
      </div>
    </div>
  </div>
</template>

<style>
.easy-layout {
  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;

  --sidebar-width: 248px;
}
.easy-layout.short {
  --sidebar-width: 90px;
}

.easy-layout__content {
  width: calc(100% - var(--sidebar-width));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  box-sizing: border-box;
  padding-right: 16px;
}
.easy-layout__header {
  height: 64px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: flex-end;
}
.easy-layout__footer {
  height: 56px;
  display: flex;
  align-items: center;
  padding-right: 20px;
  box-sizing: border-box;
  justify-content: space-between;
}
.easy-layout__footer .partners-logo {
  display: flex;
  gap: 12px;
}
.easy-layout__footer .partners-logo img {
  height: 24px;
}
.easy-layout__body {
  flex: 1;
  height: calc(100% - 136px);
}
.easy-layout__body-inner {
  border: 1px solid #ffffff;
  border-radius: 16px;
  padding: 8px 5px 8px 8px;
  box-sizing: border-box;
  height: 100%;
  background: #ffffff59;
}
.easy-layout__scrollbar {
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
  padding-right: 3px;
}
.blur-block {
  border-radius: 8px;
  position: relative;
  height: 100%;
  &::after {
    content: "";
    position: absolute;
    background: #ffffffb2;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    backdrop-filter: blur(42px);
    border-radius: inherit;
  }
}
.dark-mode .easy-layout__body-inner {
  background: #0C111D66;
  border: 1px solid #ffffff33;
}
.dark-mode .blur-block::after {
  background: #0c111dcc;
}

.easy-layout .copyright {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-subtle);
}
</style>
