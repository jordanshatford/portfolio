<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
button {
  background: $color-primary;
  border: 0;
  padding: 0.75rem 1.5rem;
  color: $color-white;
  transition: 0.4s;
  border-radius: 0.25rem;
  &:hover {
    background: $color-primary-accent;
  }
}
</style>
