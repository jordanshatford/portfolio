<template>
  <span class="v-badge"><slot></slot></span>
</template>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.v-badge {
  font-size: $font-sm;
  font-weight: $font-bold;
  background: $color-grey-light;
  display: inline-block;
  padding: 0.4rem 0.8rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
}
</style>
