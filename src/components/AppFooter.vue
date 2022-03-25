<template>
  <div class="app-footer">
    <div>
      <div class="app-footer__copyright">© {{ config.COPYRIGHT.YEAR }} {{ config.COPYRIGHT.CREATOR }}</div>
    </div>
    <div class="app-footer__icon-container">
      <a :href="config.COPYRIGHT.REPO" target="_blank"
        ><simple-icon class="app-footer__icon-container__icon" name="github"></simple-icon
      ></a>
    </div>
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
    font-size: 16px;
    font-weight: 700;
  }
  &__icon-container {
    width: 32px;
    height: 32px;
    &__icon {
      color: $color-grey-lightest !important;
      &:hover {
        color: $color-primary !important;
      }
    }
  }
}
</style>
