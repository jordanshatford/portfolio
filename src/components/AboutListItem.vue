<template>
  <li class="about-list-item">
    <ph-caret-right :size="20" weight="bold" class="about-list-item__icon"></ph-caret-right>
    <strong>{{ title }}:</strong> <span>{{ value }}</span>
  </li>
</template>

<script setup lang="ts">
import { PhCaretRight } from "phosphor-vue"

interface Props {
  title: string
  value: string | number
}

defineProps<Props>()
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";

.about-list-item {
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  &__icon {
    margin-right: 0.3rem;
    color: $color-primary;
  }
  strong {
    margin-right: 0.8rem;
  }
}
</style>
