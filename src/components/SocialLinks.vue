<template>
  <div class="sociallinks">
    <a v-for="(social, index) in socials" :href="social.link" class="sociallinks__link" :key="index">
      <simple-icon class="sociallinks__link__icon" :icon="social.icon"></simple-icon>
    </a>
  </div>
</template>

<script setup lang="ts">
import SimpleIcon from "@/components/SimpleIcon.vue"

const socials = [
  {
    icon: "Github",
    link: "#",
  },
  {
    icon: "LinkedIn",
    link: "#",
  },
  {
    icon: "StackOverflow",
    link: "#",
  },
]
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.sociallinks {
  margin-top: 40px;
  display: flex;
  &__link {
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    color: $color-white;
    line-height: 1;
    margin-right: 8px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    &:hover {
      background: $color-primary;
    }
    &__icon {
      width: 1.2rem;
      height: auto;
    }
  }
  @media (max-width: 992px) {
    margin-top: 15px;
  }
}

#header.header-top .sociallinks {
  display: none;
}
</style>
