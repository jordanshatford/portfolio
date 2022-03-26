<template>
  <div class="app-footer">
    <div class="app-footer__copyright">© {{ config.COPYRIGHT.YEAR }} {{ config.COPYRIGHT.CREATOR }}</div>
    <a :href="config.COPYRIGHT.REPO" target="_blank">
      <simple-icon name="github" size="32px" class="app-footer__icon"></simple-icon>
    </a>
  </div>
</template>

<script setup lang="ts">
import SimpleIcon from "@/components/SimpleIcon.vue"
import { config } from "@/utils/config"
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.app-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px 20px 30px;
  color: $color-grey-lightest;
  width: 100%;
  background-color: $color-grey-dark;
  height: 80px;
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
