<template>
  <div class="skillcard col-lg-3 col-md-4">
    <div class="skillcard__iconbox">
      <simple-icon class="skillcard__iconbox__icon" :name="name" size="2rem"></simple-icon>
      <h3>{{ name }}</h3>
    </div>
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
.skillcard {
  &__iconbox {
    display: flex;
    align-items: center;
    padding: 1.2rem;
    background: $color-grey;
    transition: ease-in-out 0.3s;
    &:hover {
      background: $color-grey-light;
    }
    &__icon {
      padding-right: 0.6rem;
    }
    h3 {
      font-weight: 700;
      margin: 0;
      padding: 0;
      line-height: 1;
      font-size: $font-base;
    }
  }
  @media (max-width: $breakpoint-md) {
    &:nth-child(n + 2) {
      margin-top: 1.5rem;
    }
  }
  @media (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
    &:nth-child(n + 4) {
      margin-top: 1.5rem;
    }
  }
  @media (min-width: $breakpoint-lg) {
    &:nth-child(n + 5) {
      margin-top: 1.5rem;
    }
  }
}
</style>
