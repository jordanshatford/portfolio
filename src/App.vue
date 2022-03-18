<template>
  <app-header></app-header>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue"
</script>

<style lang="scss">
body {
  background-color: #040404;
  color: #fff;
  position: relative;
  background: transparent;
  &::before {
    content: "";
    position: fixed;
    background: #040404 url("@/assets/img/bg.jpg") top right no-repeat;
    background-size: cover;
    left: 0;
    right: 0;
    top: 0;
    height: 100vh;
    z-index: -1;
    @media (min-width: 1024px) {
      background-attachment: fixed;
    }
  }
}

a {
  color: #18d26e;
  text-decoration: none;
  &:hover {
    color: #35e888;
    text-decoration: none;
  }
}
</style>
