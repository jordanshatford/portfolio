<template>
  <div class="projectcard col-lg-4 col-md-6 d-flex align-items-stretch">
    <div class="projectcard__container">
      <div class="projectcard__icon"><ph-app-window :size="32"></ph-app-window></div>
      <h4 class="projectcard__title">
        <a href="">{{ repository.name }}</a>
      </h4>
      <p>{{ repository.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhAppWindow } from "phosphor-vue"
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
    padding: 80px 20px;
    transition: all ease-in-out 0.3s;
    &:hover {
      background: rgba(255, 255, 255, 0.12);
    }
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
  p {
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 0;
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
