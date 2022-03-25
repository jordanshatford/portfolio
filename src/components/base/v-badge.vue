<template>
  <span class="v-badge"><slot></slot></span>
</template>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.v-badge {
  font-size: 0.8rem;
  background: $color-grey-light;
  padding: 0.4rem 0.8rem;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
}
</style>
