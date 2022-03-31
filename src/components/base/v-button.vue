<template>
  <button class="v-button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.v-button {
  color: $color-white;
  background: $color-primary;
  border: 0;
  padding: 0.75rem 1.5rem;
  transition: 0.4s;
  border-radius: $border-radius-base;
  &:hover {
    background: $color-primary-accent;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
}
</style>
