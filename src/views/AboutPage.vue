<template>
  <v-container class="aboutpage" title="About" subtitle="About Me">
    <div class="row">
      <div class="col-lg-4">
        <img :src="me.pictureUrl" class="img-fluid w-100" alt="profile picture" />
      </div>
      <div class="col-lg-8 pt-4 pt-lg-0 aboutpage__description">
        <h3>
          {{ me.job.title }} <span>at {{ me.job.organization }}</span>
        </h3>
        <p class="aboutpage__description__job">
          {{ me.job.descriptions[0] }}
        </p>
        <div class="row">
          <div class="col-lg-6">
            <ul>
              <about-list-item title="Birthday" :value="me.dob.toDateString().substring(4)"></about-list-item>
              <about-list-item title="Email" :value="me.email"></about-list-item>
              <about-list-item title="Location" :value="me.location"></about-list-item>
            </ul>
          </div>
          <div class="col-lg-6">
            <ul>
              <about-list-item title="Age" :value="age"></about-list-item>
              <about-list-item title="Degree" :value="me.degree"></about-list-item>
              <about-list-item title="Language" :value="me.language"></about-list-item>
            </ul>
          </div>
        </div>
        <p>{{ me.bio }}</p>
      </div>
    </div>
  </v-container>
  <v-container v-for="(attribute, index) in attributes" :title="attribute.title" :key="index">
    <div class="row">
      <skill-card v-for="(skill, index) in attribute.values" :key="index" :name="skill" />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { attributes, me } from "@/assets/data"
import { computed } from "vue"
import AboutListItem from "@/components/AboutListItem.vue"
import SkillCard from "@/components/SkillCard.vue"

const age = computed<number>(() => {
  const ageDiffMs = Date.now() - me.dob.getTime()
  return Math.abs(new Date(ageDiffMs).getUTCFullYear() - 1970)
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.aboutpage {
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
}
</style>
