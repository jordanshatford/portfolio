<template>
  <v-container class="portfoliopage" title="Portfolio" subtitle="My Projects">
    <div v-if="isFetching" class="d-flex justify-content-center">
      <ph-circle-notch weight="bold" :size="32" class="portfoliopage__loading"></ph-circle-notch>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <project-filters :options="availableFilters" v-model="activeFilter"></project-filters>
        </div>
      </div>
      <div class="row">
        <project-card v-for="(repo, index) of filteredRepos" :key="index" :repository="repo"></project-card>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useQuery } from "villus"
import { PhCircleNotch } from "phosphor-vue"
import { GetViewerReposQuery } from "@/utils/queries"
import type { GithubRepository, GithubUser } from "@/utils/types"
import ProjectCard from "@/components/ProjectCard.vue"
import ProjectFilters from "@/components/ProjectFilters.vue"

const FILTER_ALLOW_ALL = "all"
const activeFilter = ref<string>(FILTER_ALLOW_ALL)

const { data, isFetching } = useQuery<{ viewer: GithubUser }>({
  query: GetViewerReposQuery,
})

const repositories = computed(() => {
  return data?.value?.viewer?.repositories?.nodes
})

function getRelevantLangs(repo: GithubRepository) {
  const relevantLangs: string[] = []
  for (const lang of repo.languages.edges) {
    // Language is atleast 20% of the repo
    if (lang.size / repo.languages.totalSize > 0.2) {
      relevantLangs.push(lang.node.name)
    }
  }
  return relevantLangs
}

function repoIsPartOfFilter(repo: GithubRepository, filter: string) {
  if (filter === FILTER_ALLOW_ALL) {
    return true
  }
  const filterInLangs = repo.languages.edges.find((edge) => edge.node.name === filter)
  const filterInTopics = repo.repositoryTopics.edges.find((edge) => edge.node.topic.name.toLowerCase() === filter)
  return filterInLangs || filterInTopics
}

const availableFilters = computed(() => {
  const tags = new Set<string>([FILTER_ALLOW_ALL])
  if (repositories.value) {
    for (const repo of repositories.value) {
      getRelevantLangs(repo).forEach((lang) => {
        tags.add(lang)
      })
      repo.repositoryTopics.edges.forEach((edge) => {
        tags.add(edge.node.topic.name.toLowerCase())
      })
    }
  }
  return tags
})

const filteredRepos = computed(() => {
  let repos: GithubRepository[] = []
  if (repositories.value) {
    repos = repositories.value.filter((repo) => {
      return repoIsPartOfFilter(repo, activeFilter.value)
    })
  }
  return repos
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/mixins";
.portfoliopage {
  &__loading {
    @include animate-spin;
  }
}
</style>
