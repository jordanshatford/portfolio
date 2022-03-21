<template>
  <nav id="navbar" class="navbar" :class="{ 'navbar-mobile': showMobileMenu }">
    <ul>
      <li v-for="r in routes" :key="r.path" @click="showMobileMenu = false">
        <router-link class="nav-link" :class="{ active: r.name === route.name }" :to="r.name">{{
          r.meta?.title
        }}</router-link>
      </li>
    </ul>
    <app-hamburger class="mobile-nav-toggle" v-model="showMobileMenu"></app-hamburger>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"
import { routes } from "@/router"
import AppHamburger from "@/components/AppHamburger.vue"

const route = useRoute()
const showMobileMenu = ref<boolean>(false)
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.navbar {
  padding: 0;
  margin-top: 35px;
}
.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}
.navbar li {
  position: relative;
}
.navbar li + li {
  margin-left: 30px;
}
.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  transition: 0.3s;
}
.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}
.navbar a:before {
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
.navbar a:hover:before,
.navbar li:hover > a:before,
.navbar .active:before {
  visibility: visible;
  width: 25px;
}
.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover > a {
  color: $color-white;
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
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
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
}
.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}
.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 45px;
  left: 15px;
  padding: 10px 0;
  overflow-y: auto;
  transition: 0.3s;
  border: 2px solid rgba(255, 255, 255, 0.2);
}
.navbar-mobile li {
  padding: 12px 20px;
}
.navbar-mobile li + li {
  margin: 0;
}
.navbar-mobile a,
.navbar-mobile a:focus {
  font-size: 16px;
  position: relative;
}
</style>
