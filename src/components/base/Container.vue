<template>
  <div class="v-container container">
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
  background: rgba(0, 0, 0, 0.9);
  padding: 30px;
  &__title {
    font-size: 14px;
    font-weight: 500;
    padding: 0;
    line-height: 1px;
    margin: 0 0 20px 0;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #aaaaaa;
    &::after {
      content: "";
      width: 120px;
      height: 1px;
      display: inline-block;
      background: $color-primary-accent;
      margin: 4px 10px;
    }
  }
  &__subtitle {
    margin: 0;
    margin: -15px 0 15px 0;
    font-size: 36px;
    font-weight: 700;
    text-transform: uppercase;
    color: $color-white;
  }
}
</style>
