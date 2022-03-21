<template>
  <v-container class="aboutpage" title="About" subtitle="About Me">
    <div class="row">
      <div class="col-lg-4">
        <img :src="user.profilePicUrl" class="img-fluid w-100" alt="profile picture" />
      </div>
      <div class="col-lg-8 pt-4 pt-lg-0 aboutpage__description">
        <h3>{{ user.jobTitle }}</h3>
        <p class="fst-italic">
          {{ user.jobDescription }}
        </p>
        <div class="row">
          <div class="col-lg-6">
            <ul>
              <li>
                <ph-caret-right :size="20" weight="bold"></ph-caret-right>
                <strong>Birthday:</strong> <span>{{ user.dateOfBirth.toDateString().substring(4) }}</span>
              </li>
              <li>
                <ph-caret-right :size="20" weight="bold"></ph-caret-right>
                <strong>Website:</strong> <span>{{ user.websiteUrl }}</span>
              </li>
              <li>
                <ph-caret-right :size="20" weight="bold"></ph-caret-right>
                <strong>Phone:</strong> <span>{{ user.phoneNumber }}</span>
              </li>
              <li>
                <ph-caret-right :size="20" weight="bold"></ph-caret-right>
                <strong>Location:</strong> <span>{{ user.location }}</span>
              </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <ul>
              <li>
                <ph-caret-right :size="20" weight="bold"></ph-caret-right>
                <strong>Age:</strong> <span>{{ user.age }}</span>
              </li>
              <li>
                <ph-caret-right :size="20" weight="bold"></ph-caret-right>
                <strong>Degree:</strong> <span>{{ user.degree }}</span>
              </li>
              <li>
                <ph-caret-right :size="20" weight="bold"></ph-caret-right>
                <strong>Email:</strong> <span>{{ user.primaryEmail }}</span>
              </li>
              <li>
                <ph-caret-right :size="20" weight="bold"></ph-caret-right>
                <strong>Language:</strong> <span>{{ user.primaryLanguage }}</span>
              </li>
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
import { PhCaretRight } from "phosphor-vue"
import useUser from "@/composables/use-user"
import SkillCard from "@/components/SkillCard.vue"
const user = useUser()
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.aboutpage {
  &__description {
    h3 {
      font-weight: 700;
      font-size: 2rem;
      color: $color-primary;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        margin-bottom: 1.2rem;
        display: flex;
        align-items: center;
      }
      strong {
        margin-right: 0.8rem;
      }
      svg {
        margin-right: 0.3rem;
        color: $color-primary;
      }
    }
    p:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
