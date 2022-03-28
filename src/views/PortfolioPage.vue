<template>
  <v-container class="portfoliopage" title="Portfolio" subtitle="My Projects">
    <div class="row">
      <div class="col-lg-12 d-flex justify-content-center">
        <project-filters :options="availableFilters" v-model="activeFilter"></project-filters>
      </div>
    </div>
    <div class="row">
      <project-card v-for="(project, index) of filteredProjects" :key="index" :project="project"></project-card>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { info } from "@/assets/info"
import ProjectCard from "@/components/ProjectCard.vue"
import ProjectFilters from "@/components/ProjectFilters.vue"

const FILTER_ALLOW_ALL = "all"
const activeFilter = ref<string>(FILTER_ALLOW_ALL)

const availableFilters = info.projects.reduce((filters, project) => {
  project.tags.forEach(t => filters.add(t))
  project.languages.forEach(l => filters.add(l))
  return filters
}, new Set<string>([FILTER_ALLOW_ALL]))

const filteredProjects = computed(() => {
  return info.projects.filter(project => {
    if (activeFilter.value.toLowerCase() === FILTER_ALLOW_ALL) {
      return true
    }
    const filterInTags = project.tags.some(tag => activeFilter.value.toLowerCase() === tag.toLowerCase())
    const filterInLanguage = project.languages.some(lang => activeFilter.value.toLowerCase() === lang.toLowerCase())
    return filterInLanguage || filterInTags
  })
})
</script>
