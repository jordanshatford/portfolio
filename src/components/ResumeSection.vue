<template>
  <div class="resume-section">
    <h3 class="resume-section__title">{{ section.title }}</h3>
    <div v-for="(item, index) in section.items" :key="index" class="resume-section__item">
      <h4>{{ item.title }}</h4>
      <v-badge v-for="(range, index) in item.dateRanges" :key="index">
        {{ range.start.getFullYear() }} - {{ range?.end?.getFullYear() ?? "Present" }}
      </v-badge>
      <p>{{ item.description }}</p>
      <div class="resume-section__item__long-description">
      <p v-if="item.longDescriptions?.length === 1">{{ item.longDescriptions[0] }}</p>
      <div v-else>
        <ul>
          <li v-for="(description, index) in item.longDescriptions" :key="index">{{ description }}</li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ResumeSection } from "@/utils/user"

interface Props {
  section: ResumeSection
}

defineProps<Props>()
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.resume-section {
  &__title {
    font-size: 26px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
    color: $color-white;
  }
  &__item {
    padding: 0 0 20px 20px;
    margin-top: -2px;
    border-left: 2px solid $color-grey-light;
    position: relative;
    h4 {
      line-height: 18px;
      font-size: 18px;
      font-weight: 600;
      text-transform: uppercase;
      color: $color-primary;
      margin-bottom: 10px;
    }
    ul {
      padding-left: 20px;
      li {
        padding-bottom: 10px;
      }
    }
    &:last-child {
      padding-bottom: 0;
    }
    &::before {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50px;
      left: -9px;
      top: 0;
      background: $color-primary;
      border: 2px solid $color-primary;
    }
    &__long-description {
      color: $color-grey-lightest;
    }
  }
}
</style>
