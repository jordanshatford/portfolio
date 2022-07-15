<template>
  <li class="about-list-item">
    <chevron-right-icon class="about-list-item__icon"></chevron-right-icon>
    <strong>{{ title }}:</strong> <span>{{ value }}</span>
  </li>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/outline"

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
    width: 25px;
    margin-right: 0.3rem;
    color: $color-primary;
  }
  strong {
    margin-right: 0.8rem;
    color: $color-grey-lightest;
  }
}
</style>
