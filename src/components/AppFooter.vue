<template>
  <div class="app-footer">
    <div class="app-footer__container">
      <div class="app-footer__copyright">© {{ config.COPYRIGHT.YEAR }} {{ config.COPYRIGHT.CREATOR }}</div>
      <a :href="config.COPYRIGHT.REPO" target="_blank">
        <simple-icon name="github" size="32px" class="app-footer__icon"></simple-icon>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import SimpleIcon from "@/components/SimpleIcon.vue"
import { config } from "@/assets/config"
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.app-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $color-grey-lightest;
  width: 100%;
  background-color: $color-grey-dark;
  height: 80px;
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 0.6rem;
    padding-left: 0.6rem;
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
  }
  &__copyright {
    font-size: $font-md;
    font-weight: $font-bold;
  }
  &__icon {
    color: $color-grey-lightest !important;
    &:hover {
      color: $color-primary !important;
    }
  }
}
</style>
