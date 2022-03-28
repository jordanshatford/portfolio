<template>
  <div class="projectcard col-lg-4 col-md-6 d-flex align-items-stretch">
    <div class="projectcard__container">
      <a :href="project.homepageUrl" target="_blank">
        <img :src="project.imageUrl" class="projectcard__image" alt="Project Image" />
      </a>
      <h4 class="projectcard__title">
        <a :href="project.homepageUrl">{{ project.name }}</a>
      </h4>
      <p class="projectcard__description">{{ project.description }}</p>
      <v-badge v-for="(lang, index) in [...project.tags, ...project.languages]" :key="index">{{ lang }}</v-badge>
      <div class="projectcard__links">
        <a v-if="project.repoUrl" :href="project.repoUrl" class="projectcard__links__link" target="_blank">
          <span>Code <ph-git-branch :size="24"></ph-git-branch></span>
        </a>
        <a v-if="project.homepageUrl" :href="project.homepageUrl" class="projectcard__links__link" target="_blank">
          <span>View <ph-arrow-square-out :size="24"></ph-arrow-square-out></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhArrowSquareOut, PhGitBranch } from "phosphor-vue"

interface Props {
  project: {
    name: string
    description: string
    repoUrl: string
    homepageUrl: string
    imageUrl: string
    tags: string[]
    languages: string[]
  }
}

defineProps<Props>()
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
