<template>
  <header class="app-header">
    <div class="container">
      <h1>
        <router-link :to="RouteNameConstants.ABOUT">Jordan Shatford</router-link>
      </h1>
      <app-nav-bar></app-nav-bar>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppNavBar from "@/components/AppNavBar.vue"
import { RouteNameConstants } from "@/router"
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.app-header {
  display: flex;
  align-items: center;
  z-index: 997;
  overflow-y: auto;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background: $color-grey-dark;
  h1 {
    margin: 0;
    margin-right: auto;
    font-size: $font-xxl;
    padding: 0;
    line-height: 1;
    font-weight: $font-bold;
    a,
    a:hover {
      color: $color-white;
      line-height: 1;
      display: inline-block;
      text-decoration: none;
    }
  }
  .container {
    display: flex;
    align-items: center;
  }
  @media (max-width: $breakpoint-md) {
    height: 60px;
    h1 {
      font-size: $font-xl;
    }
  }
}
</style>
