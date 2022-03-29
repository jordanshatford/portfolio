<template>
  <header class="app-header">
    <div class="app-header__container">
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
  &__container {
    display: flex;
    align-items: center;
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
  @media (max-width: $breakpoint-md) {
    height: 60px;
    h1 {
      font-size: $font-xl;
    }
  }
}
</style>
