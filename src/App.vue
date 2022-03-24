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
  background-color: #040404;
  color: #fff;
  position: relative;
  background: transparent;
  &::before {
    content: "";
    position: fixed;
    background-color: #18181b;
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
}
@media (max-width: 768px) {
  section.section-show {
    top: 80px;
  }
}
</style>
