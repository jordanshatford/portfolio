<template>
  <app-header></app-header>
  <section class="app-section">
    <router-view></router-view>
  </section>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue"
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
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: 2;
  top: 100px;
  bottom: auto;
  padding-bottom: 45px;
  @media (max-width: $breakpoint-md) {
    top: 80px;
  }
}
</style>
