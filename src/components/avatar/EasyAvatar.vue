<script setup lang="ts">
import { computed, CSSProperties } from 'vue'
import './EasyAvatar.scss'

const defaultAvatar = 'https://api2.globaltravel.space//media/documents/default_profile.svg'

const {
  size = '48px',
  bgColor = 'var(--navy-100)',
  borderColor = 'var(--navy-50)',
  textColor = 'var(--navy-800)',
  ...props
} = defineProps<{
  size?: string
  url?: string
  initials?: string
  online?: boolean
  companyLogo?: string
  bgColor?: string
  borderColor?: string
  textColor?: string
  bordered?: boolean
}>()

const style = computed(() => {
  const currentSize = size || '48px'
  const data: CSSProperties = {
    width: currentSize,
    height: currentSize,
    backgroundColor: bgColor,
    borderColor: borderColor,
    color: textColor,
    '--size': currentSize,
  }

  if (props.url) {
    data.backgroundImage = `url(${props.url})`
  } else if (!props.initials) {
    data.backgroundImage = `url(${defaultAvatar})`
  }
  return data
})
</script>

<template>
  <div :class="['avatar', { bordered }]" :style="style">
    <div v-if="initials && !url" class="initials">{{ initials }}</div>
    <div
      v-if="online || companyLogo"
      :class="['online', { company: companyLogo }]"
      :style="{ backgroundImage: `url(${companyLogo})` }"
    ></div>
  </div>
</template>
