<script setup lang="ts">

import EasyDropdown from "@/components/dropdown/EasyDropdown.vue";
import EasyButton from "@/components/button/EasyButton.vue";
import EasyIcon from "@/components/icon/EasyIcon.vue";
</script>

<template>
  <EasyDropdown>
    <template #trigger>
      <EasyButton size="sm" outlined>
        <EasyIcon name="icon-russia"/>
      </EasyButton>
    </template>

    <div class="socials">
      Instagram
    </div>
    <i class="ruIcon"></i>
  </EasyDropdown>
</template>

<style scoped lang="scss">

</style>
