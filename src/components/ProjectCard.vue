<template>
  <div class="projectcard col-lg-4 col-md-6 d-flex align-items-stretch">
    <div class="projectcard__container">
      <a v-if="!imageIsAvatar" :href="repository.homepageUrl" target="_blank">
        <img :src="repository.openGraphImageUrl" class="projectcard__image" alt="Project Image" />
      </a>
      <div v-else class="projectcard__icon"><ph-app-window :size="32"></ph-app-window></div>
      <h4 class="projectcard__title">
        <a :href="repository.homepageUrl">{{ repository.name }}</a>
      </h4>
      <p class="projectcard__description">{{ repository.description }}</p>
      <v-badge v-for="lang in repository.languages.edges" :key="lang.node.id">{{ lang.node.name }}</v-badge>
      <div class="projectcard__links">
        <a :href="repository.url" class="projectcard__links__link" target="_blank">
          <span>Code <ph-git-branch :size="24"></ph-git-branch></span>
        </a>
        <a
          v-if="repository.homepageUrl"
          :href="repository.homepageUrl"
          class="projectcard__links__link"
          target="_blank"
        >
          <span>View <ph-arrow-square-out :size="24"></ph-arrow-square-out></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { PhAppWindow, PhArrowSquareOut, PhGitBranch } from "phosphor-vue"
import type { GithubRepository } from "@/utils/types"

interface Props {
  repository: GithubRepository
}

const props = defineProps<Props>()

const imageIsAvatar = computed(() => {
  return props.repository.openGraphImageUrl.includes("avatars.githubusercontent.com")
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.projectcard {
  &__container {
    width: 100%;
    text-align: center;
    background: $color-grey;
    padding: 40px 20px;
    transition: all ease-in-out 0.3s;
  }
  &__image {
    width: 100%;
    height: auto;
    border-radius: 5px;
    border: 0.125rem solid $color-primary;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  &__icon {
    margin: 0 auto;
    width: 64px;
    height: 64px;
    background: $color-primary;
    border-radius: 5px;
    transition: all 0.3s ease-out 0s;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    transform-style: preserve-3d;
  }
  &__title {
    font-weight: $font-bold;
    margin-bottom: 15px;
    font-size: $font-xl;
    a {
      color: $color-white;
    }
  }
  &__description {
    font-size: $font-base;
    color: $color-grey-lightest;
  }
  &__links {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    &__link {
      margin-right: 0.5rem;
      border: 0.125rem solid $color-primary;
      padding: 0.4rem 0.6rem 0.4rem 0.6rem;
      border-radius: 0.25rem;
      span {
        color: $color-white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      svg {
        margin-left: 0.2rem;
      }
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        cursor: pointer;
        border: 0.125rem solid $color-primary-accent;
        background: $color-grey-light;
      }
    }
  }
  @media (max-width: $breakpoint-md) {
    &:nth-child(n + 2) {
      margin-top: 1.5rem;
    }
  }
  @media (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
    &:nth-child(n + 3) {
      margin-top: 1.5rem;
    }
  }
  @media (min-width: $breakpoint-lg) {
    &:nth-child(n + 4) {
      margin-top: 1.5rem;
    }
  }
}
</style>
