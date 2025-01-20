<script setup lang="ts">
import './EasySectionMessage.scss'
import EasyIcon from "@/components/icon/EasyIcon.vue";

defineProps<{title: string, description: string, type?: string}>();
</script>

<template>
  <div class="section">
    <EasyIcon name="icon-Info-Circle" class="section-icon" :size="20"/>
    <div class="section-main">
      <h5 class="section-main-title">{{title}}</h5>
      <p class="section-main-desc">{{description}}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
