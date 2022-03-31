<template>
  <div class="skill-card">
    <simple-icon class="skill-card__icon" :name="name" size="2rem"></simple-icon>
    <h3 class="skill-card__text">{{ name }}</h3>
  </div>
</template>

<script setup lang="ts">
import SimpleIcon from "@/components/SimpleIcon.vue"

interface Props {
  name: string
}

defineProps<Props>()
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.skill-card {
  display: flex;
  align-items: center;
  padding: 1.2rem;
  background: $color-grey;
  border-radius: $border-radius-base;
  &:hover {
    background: $color-grey-light;
  }
  &__icon {
    padding-right: 0.6rem;
  }
  &__text {
    font-weight: $font-bold;
    font-size: $font-base;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
}
</style>
