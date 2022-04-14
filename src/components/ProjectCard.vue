<template>
  <div class="project-card">
    <a :href="project.homepageUrl" target="_blank">
      <img :src="project.imageUrl" class="project-card__image" alt="Project Image" />
    </a>
    <h4 class="project-card__title">
      <a :href="project.homepageUrl">{{ project.name }}</a>
    </h4>
    <p class="project-card__description">{{ project.description }}</p>
    <v-badge v-for="(lang, index) in [...project.tags, ...project.languages]" :key="index">{{ lang }}</v-badge>
    <div class="project-card__links">
      <a v-if="project.repoUrl" :href="project.repoUrl" class="project-card__links__link" target="_blank">
        <simple-icon name="github" size="28px" class="project-card__links__link__icon"></simple-icon>
      </a>
      <a v-if="project.homepageUrl" :href="project.homepageUrl" class="project-card__links__link" target="_blank">
        <ph-arrow-square-out :size="28" class="project-card__links__link__icon">
          <title>View</title>
        </ph-arrow-square-out>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhArrowSquareOut } from "phosphor-vue"
import SimpleIcon from "@/components/SimpleIcon.vue"

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
.project-card {
  width: 100%;
  text-align: center;
  background: $color-grey;
  border-radius: $border-radius-base;
  padding: 1rem;
  &__image {
    width: 100%;
    height: auto;
    border: 0.125rem solid $color-primary;
    border-radius: $border-radius-base;
    margin-bottom: 1.25rem;
  }
  &__title {
    font-size: $font-xl;
    font-weight: $font-bold;
    margin-bottom: 1rem;
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
    margin-top: 1.25rem;
    &__link {
      &:last-child {
        margin-left: 2rem;
      }
      &__icon {
        color: $color-white !important;
        &:hover {
          color: $color-primary !important;
        }
      }
    }
  }
}
</style>
