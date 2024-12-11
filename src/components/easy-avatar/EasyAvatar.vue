<script setup lang="ts">
import {computed} from "vue";
import defaultAvatar from '/src/assets/images/default/avatar.svg'
import './EasyAvatar.scss'

const props = withDefaults(defineProps<{
  size?: string,
  url?: string,
  initials?: string,
  status?: boolean,
  companyLogo?: string,
  bgColor: string,
  borderColor: string,
  textColor: string,
  bordered: boolean
}>(), {})

function chooseSizes(enterSize) {
  switch (enterSize) {
    case 'xsmall':
      return {size: 24, statusSize: 6, logoSize: 10}
    case 'small':
      return {size: 32, statusSize: 8, logoSize: 12}
    case 'medium':
      return {size: 40, statusSize: 10, logoSize: 14}
    case 'large':
      return {size: 48, statusSize: 12, logoSize: 16}
    case 'xlarge':
      return {size: 56, statusSize: 14, logoSize: 18}
    case 'xxlarge':
      return {size: 64, statusSize: 16, logoSize: 20}
    default :
      return {size: 64, statusSize: 16, logoSize: 20}
  }
}

const selSize = chooseSizes(props.size)
const statusLeft = selSize.size - selSize.statusSize
const logoLeft = selSize.size - selSize.logoSize
const style = computed(() => ({
  width: `${selSize.size}px`,
  height: `${selSize.size}px`,
}));
const statusStyle = computed(() => ({
  width: `${selSize.statusSize}px`,
  height: `${selSize.statusSize}px`,
  left: `${statusLeft}px`,
  top: `${statusLeft}px`,
}));
const logoStyle = computed(() => ({
  width: `${selSize.logoSize}px`,
  height: `${selSize.logoSize}px`,
  left: `${logoLeft}px`,
  top: `${logoLeft}px`,
}));

</script>

<template>
  <div class="avatar" :style="style">
    <img v-if="props.url" class="img" :src="defaultAvatar" alt="">
    <img v-else-if="!props.initials" class="img" :src="defaultAvatar" alt="">
    <div v-if="props.initials" class="back" :class="{'border': props.bordered}" :style="{ background: props.bgColor,'border-color': borderColor }">
      <span class="initials" :style="{ color: props.textColor }">AV</span>
    </div>
    <span v-if="props.status" class="status" :style="statusStyle"></span>
    <img v-if="props.companyLogo" :src="props.companyLogo" class="companyLogo" :style="logoStyle">
  </div>
</template>
