<template>
  <div class="v-container">
    <div>
      <h2 class="v-container__title">{{ title }}</h2>
      <p v-if="subtitle" class="v-container__subtitle">{{ subtitle }}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.v-container {
  background: $color-grey-dark;
  padding: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
  margin-right: auto;
  margin-left: auto;
  width: 1320px;
  @media (max-width: $breakpoint-sm) {
    width: 100%;
  }
  @media (min-width: $breakpoint-sm) and (max-width: $breakpoint-md) {
    width: 540px;
  }
  @media (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
    width: 720px;
  }
  @media (min-width: $breakpoint-lg) and (max-width: $breakpoint-xl) {
    width: 960px;
  }
  @media (min-width: $breakpoint-xl) and (max-width: $breakpoint-xxl) {
    width: 1140px;
  }
  &__title {
    font-size: $font-base;
    font-weight: $font-bold;
    text-transform: uppercase;
    color: $color-grey-lightest;
    padding: 0;
    margin: 0 0 1rem 0;
    letter-spacing: 0.2rem;
    &::after {
      content: "";
      width: 6rem;
      height: 0.1rem;
      display: inline-block;
      background: $color-primary;
      margin: 0.3rem 0.7rem;
    }
  }
  &__subtitle {
    font-size: $font-xxl;
    font-weight: $font-bold;
    text-transform: uppercase;
    color: $color-white;
    margin: 0;
    margin: -1rem 0 1rem 0;
  }
}
</style>
