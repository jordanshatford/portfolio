<template>
  <nav id="navbar" class="navbar" :class="{ 'navbar-mobile': showMobileMenu }">
    <ul>
      <li v-for="r in routes" :key="r.path" @click="showMobileMenu = false">
        <router-link class="nav-link" :class="{ active: r.name === route.name }" :to="r.name">{{
          r.meta?.title
        }}</router-link>
      </li>
    </ul>
    <component
      class="mobile-nav-toggle"
      :is="showMobileMenu ? PhX : PhList"
      @click="showMobileMenu = !showMobileMenu"
      :size="28"
      weight="bold"
    ></component>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"
import { PhList, PhX } from "phosphor-vue"
import { routes } from "@/router"

const route = useRoute()
const showMobileMenu = ref<boolean>(false)
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.navbar {
  padding: 0;
  margin-top: 35px;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
    @media (max-width: $breakpoint-lg) {
      display: none;
    }
  }
  li {
    position: relative;
  }
  li + li {
    margin-left: 30px;
  }
  a,
  a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    font-size: 16px;
    font-weight: 400;
    color: $color-grey-lightest;
    white-space: nowrap;
    transition: 0.3s;
  }
  a:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: $color-primary;
    visibility: hidden;
    width: 0px;
    transition: all 0.3s ease-in-out 0s;
  }
  a:hover:before,
  li:hover > a:before,
  .active:before {
    visibility: visible;
    width: 25px;
  }
  a:hover,
  .active,
  .active:focus,
  li:hover > a {
    color: $color-white;
  }
}
.mobile-nav-toggle {
  color: $color-white;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
  position: fixed;
  right: 15px;
  top: 15px;
  @media (max-width: $breakpoint-lg) {
    display: block;
  }
}

.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  transition: 0.3s;
  z-index: 999;
  margin-top: 0;
  .mobile-nav-toggle {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  ul {
    display: block;
    position: absolute;
    top: 55px;
    right: 15px;
    bottom: 45px;
    left: 15px;
    padding: 10px 0;
    overflow-y: auto;
    transition: 0.3s;
    border: 2px solid $color-grey-light;
  }
  li {
    padding: 12px 20px;
  }
  li + li {
    margin: 0;
  }
  a,
  a:focus {
    font-size: 16px;
    position: relative;
  }
}
</style>
