<template>
  <v-container class="aboutpage" title="About" subtitle="About Me">
    <div class="row">
      <div class="col-lg-4">
        <img :src="user.profilePicUrl" class="img-fluid w-100" alt="profile picture" />
      </div>
      <div class="col-lg-8 pt-4 pt-lg-0 aboutpage__description">
        <h3>
          {{ user.jobTitle }} <span>at {{ user.jobCompany }}</span>
        </h3>
        <p class="fst-italic">
          {{ user.jobDescription }}
        </p>
        <div class="row">
          <div class="col-lg-6">
            <ul>
              <about-list-item title="Birthday" :value="user.dateOfBirth.toDateString().substring(4)"></about-list-item>
              <about-list-item title="Email" :value="user.primaryEmail"></about-list-item>
              <about-list-item title="Location" :value="user.location"></about-list-item>
            </ul>
          </div>
          <div class="col-lg-6">
            <ul>
              <about-list-item title="Age" :value="user.age"></about-list-item>
              <about-list-item title="Degree" :value="user.degree"></about-list-item>
              <about-list-item title="Language" :value="user.primaryLanguage"></about-list-item>
            </ul>
          </div>
        </div>
        <p>{{ user.bio }}</p>
      </div>
    </div>
  </v-container>
  <v-container v-for="(attribute, index) in user.attributes" :title="attribute.title" :key="index">
    <div class="row">
      <skill-card v-for="(skill, index) in attribute.values" :key="index" :name="skill" />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { user } from "@/utils/user"
import AboutListItem from "@/components/AboutListItem.vue"
import SkillCard from "@/components/SkillCard.vue"
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.aboutpage {
  &__description {
    h3 {
      font-weight: 700;
      font-size: 2rem;
      color: $color-primary;
      span {
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
