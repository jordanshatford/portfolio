<template>
  <app-header></app-header>
  <section class="app-section">
    <router-view></router-view>
  </section>
  <app-footer></app-footer>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue";
</script>

<style lang="scss">
@import "@/assets/scss/abstracts/variables";
body {
  color: $color-white;
  position: relative;
  background: transparent;
  &::before {
    content: "";
    position: fixed;
    background-color: $color-grey;
    left: 0;
    right: 0;
    top: 0;
    height: 100vh;
    z-index: -1;
  }
  a {
    text-decoration: none;
  }
}

.app-section {
  min-height: 100vh;
  padding-top: 100px;
  width: 100%;
  z-index: 2;
  top: 100px;
  bottom: auto;
  padding-bottom: 30px;
  @media (max-width: $breakpoint-md) {
    padding-top: 80px;
  }
}
</style>
