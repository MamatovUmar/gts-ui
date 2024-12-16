<script setup lang="ts">
import Tag from 'primevue/tag';

type SeverityMap = "success" | "secondary" | "info" | "warning" | "danger" | "contrast"

const props = withDefaults(
  defineProps<{
    value?: string;
    rounded?: boolean,
    severity?: SeverityMap,
    icon ?: string
  }>(),
  {
    value: 'default text',
    rounded: false,
  }
);

</script>

<template>
  <div>
    <Tag
      :value="props.value"
      :rounded="props.rounded"
      :severity="props.severity"
      :icon="props.icon">
    </Tag>
  </div>
</template>

<style  lang="scss">

</style>
