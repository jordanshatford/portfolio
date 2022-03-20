<template>
  <app-header :top="route.name !== RouteNameConstants.LANDING"></app-header>
  <section v-if="route.name !== RouteNameConstants.LANDING" class="section-show">
    <router-view></router-view>
  </section>
</template>

<script setup lang="ts">
import { RouteNameConstants } from "@/router"
import { useRoute } from "vue-router"
import AppHeader from "@/components/AppHeader.vue"
const route = useRoute()
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
    background-color: #18181b;
    // background: #040404 url("@/assets/img/bg.jpg") top right no-repeat;
    // background-size: cover;
    left: 0;
    right: 0;
    top: 0;
    height: 100vh;
    z-index: -1;
    // @media (min-width: 1024px) {
    //   background-attachment: fixed;
    // }
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

section {
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 140px;
  bottom: 100%;
  opacity: 0;
  transition: ease-in-out 0.4s;
  z-index: 2;
}
section.section-show {
  top: 100px;
  bottom: auto;
  opacity: 1;
  padding-bottom: 45px;
}
@media (max-width: 768px) {
  section {
    top: 120px;
  }
  section.section-show {
    top: 80px;
  }
}
</style>
