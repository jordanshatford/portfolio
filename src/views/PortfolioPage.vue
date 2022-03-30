<template>
  <v-container class="portfolio-page" title="Portfolio" subtitle="My Projects">
    <div class="portfolio-page__filter">
      <v-select v-model="activeFilter" :options="availableFilters" class="portfolio-page__filter__select"></v-select>
    </div>
    <div class="row">
      <div
        v-for="(project, index) of filteredProjects"
        :key="index"
        class="portfolio-page__project col-lg-4 col-md-6 d-flex align-items-stretch"
      >
        <project-card :project="project"></project-card>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { info } from "@/assets/info"
import ProjectCard from "@/components/ProjectCard.vue"

const FILTER_ALLOW_ALL = "All"
const activeFilter = ref<string>(FILTER_ALLOW_ALL)

const availableFilters = info.projects.reduce((filters, project) => {
  project.tags.forEach((t) => filters.add(t))
  project.languages.forEach((l) => filters.add(l))
  return filters
}, new Set<string>([FILTER_ALLOW_ALL]))

const filteredProjects = computed(() => {
  return info.projects.filter((project) => {
    if (activeFilter.value.toLowerCase() === FILTER_ALLOW_ALL.toLowerCase()) {
      return true
    }
    const filterInTags = project.tags.some((tag) => activeFilter.value.toLowerCase() === tag.toLowerCase())
    const filterInLanguage = project.languages.some((lang) => activeFilter.value.toLowerCase() === lang.toLowerCase())
    return filterInLanguage || filterInTags
  })
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.portfolio-page {
  &__filter {
    display: flex;
    width: 100%;
    &__select {
      float: right;
      flex-basis: 32%;
      margin-left: auto;
      @media (max-width: $breakpoint-lg) {
        flex-basis: 48%;
      }
      @media (max-width: $breakpoint-md) {
        flex-basis: 100%;
      }
    }
  }
  &__project {
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
}
</style>
