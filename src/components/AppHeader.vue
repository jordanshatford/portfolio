<template>
  <header id="header" class="appheader">
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
#header {
  display: flex;
  align-items: center;
  z-index: 997;
  overflow-y: auto;
  h1 {
    font-size: 48px;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 700;
    a,
    a:hover {
      color: $color-white;
      line-height: 1;
      display: inline-block;
    }
  }
  &.appheader {
    height: 80px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    h1 {
      margin-right: auto;
      font-size: 30px;
    }
    .container {
      display: flex;
      align-items: center;
    }
    .navbar {
      margin: 0;
    }
    @media (max-width: $breakpoint-md) {
      height: 60px;
      h1 {
        font-size: 26px;
      }
    }
  }
}
</style>
