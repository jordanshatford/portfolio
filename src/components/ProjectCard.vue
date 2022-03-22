<template>
  <div class="projectcard col-lg-4 col-md-6 d-flex align-items-stretch">
    <div class="projectcard__container">
      <div class="projectcard__icon"><ph-app-window :size="32"></ph-app-window></div>
      <h4 class="projectcard__title">
        <a :href="repository.homepageUrl">{{ repository.name }}</a>
      </h4>
      <p class="projectcard__description">{{ repository.description }}</p>
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
import { PhAppWindow, PhArrowSquareOut, PhGitBranch } from "phosphor-vue"
import type { GithubRepository } from "@/utils/types"

interface Props {
  repository: GithubRepository
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.projectcard {
  &__container {
    width: 100%;
    text-align: center;
    background: rgba(204, 204, 204, 0.1);
    padding: 40px 20px;
    transition: all ease-in-out 0.3s;
  }
  &__icon {
    margin: 0 auto;
    width: 64px;
    height: 64px;
    background: #18d26e;
    border-radius: 5px;
    transition: all 0.3s ease-out 0s;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    transform-style: preserve-3d;
    i {
      color: #fff;
      font-size: 28px;
    }
  }
  &__title {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 24px;
    a {
      color: #fff;
    }
  }
  &__description {
    font-size: 14px;
  }
  &__links {
    display: flex;
    justify-content: center;
    &__link {
      margin-right: 0.5rem;
      border: 0.125rem solid #18d26e;
      padding: 0.4rem 0.6rem 0.4rem 0.6rem;
      border-radius: 0.25rem;
      span {
        color: #fff;
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
        border: 0.125rem solid #15bb62;
        background: rgba(255, 255, 255, 0.12);
      }
    }
  }
  @media (max-width: 768px) {
    &:nth-child(n + 2) {
      margin-top: 1.5rem;
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    &:nth-child(n + 3) {
      margin-top: 1.5rem;
    }
  }
  @media (min-width: 992px) {
    &:nth-child(n + 4) {
      margin-top: 1.5rem;
    }
  }
}
</style>
