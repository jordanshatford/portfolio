<template>
  <v-container class="aboutpage" title="About" subtitle="About Me">
    <div class="row">
      <div class="col-lg-4">
        <img :src="info.pictureUrl" class="aboutpage__image" alt="profile picture" />
      </div>
      <div class="aboutpage__description col-lg-8 pt-4 pt-lg-0">
        <h3>
          {{ info.job.title }} <span v-if="info.job.organization">at {{ info.job.organization }}</span>
        </h3>
        <p class="aboutpage__description__job">
          {{ info.job.descriptions[0] }}
        </p>
        <div class="row">
          <div class="col-lg-6">
            <ul>
              <about-list-item
                title="Birthday"
                :value="new Date(info.dob).toDateString().substring(4)"
              ></about-list-item>
              <about-list-item title="Email" :value="info.email"></about-list-item>
              <about-list-item title="Location" :value="info.location"></about-list-item>
            </ul>
          </div>
          <div class="col-lg-6">
            <ul>
              <about-list-item title="Age" :value="age"></about-list-item>
              <about-list-item title="Degree" :value="info.degree"></about-list-item>
              <about-list-item title="Language" :value="info.language"></about-list-item>
            </ul>
          </div>
        </div>
        <p>{{ info.bio }}</p>
      </div>
    </div>
  </v-container>
  <v-container v-for="(attribute, index) in info.attributes" :title="attribute.title" :key="index" class="aboutpage__attribute">
    <div class="row">
      <div v-for="(skill, index) in attribute.values" :key="index" class="aboutpage__skill col-lg-3 col-md-4">
        <skill-card :name="skill" />
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { info } from "@/assets/info"
import AboutListItem from "@/components/AboutListItem.vue"
import SkillCard from "@/components/SkillCard.vue"

const age = computed<number>(() => {
  const ageDiffMs = Date.now() - new Date(info.dob).getTime()
  return Math.abs(new Date(ageDiffMs).getUTCFullYear() - 1970)
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.aboutpage {
  &__image {
    width: 100%;
    border-radius: $border-radius-base;
  }
  &__description {
    &__job {
      color: $color-grey-lightest;
    }
    h3 {
      font-weight: $font-bold;
      font-size: $font-xxl;
      color: $color-primary;
      span {
        font-size: $font-lg;
        color: $color-white;
      }
    }
    ul {
      list-style: none;
      padding: 0;
    }
    p:last-child {
      margin-bottom: 0;
    }
  }
  &__attribute {
    &:not(:last-child) {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
  &__skill {
    @media (max-width: $breakpoint-md) {
      &:nth-child(n + 2) {
        margin-top: 1.5rem;
      }
    }
    @media (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
      &:nth-child(n + 4) {
        margin-top: 1.5rem;
      }
    }
    @media (min-width: $breakpoint-lg) {
      &:nth-child(n + 5) {
        margin-top: 1.5rem;
      }
    }
  }
}
</style>
