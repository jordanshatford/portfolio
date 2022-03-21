<template>
  <header id="header" :class="{ 'header-top': top }">
    <div class="container">
      <h1>
        <router-link :to="RouteNameConstants.LANDING">Jordan Shatford</router-link>
      </h1>
      <h2>I'm a <span>Software Developer</span> from Nova Scotia</h2>
      <app-nav-bar></app-nav-bar>
      <social-links></social-links>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppNavBar from "@/components/AppNavBar.vue"
import SocialLinks from "@/components/SocialLinks.vue"
import { RouteNameConstants } from "@/router"

interface Props {
  top: boolean
}

defineProps<Props>()
</script>

<style scoped lang="scss">
@import '@/assets/scss/abstracts/variables';
#header {
  transition: ease-in-out 0.3s;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 997;
  overflow-y: auto;
  * {
    transition: ease-in-out 0.3s;
  }
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
  h2 {
    font-size: 24px;
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.8);
    span {
      color: $color-white;
      border-bottom: 2px solid $color-primary;
      padding-bottom: 6px;
    }
  }
  @media (max-width: 992px) {
    h1 {
      font-size: 36px;
    }
    h2 {
      font-size: 20px;
      line-height: 30px;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  &.header-top {
    height: 80px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    h2 {
      display: none;
    }
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
    @media (max-width: 768px) {
      height: 60px;
      h1 {
        font-size: 26px;
      }
    }
  }
}
</style>
