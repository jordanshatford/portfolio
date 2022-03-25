<template>
  <v-container class="resume-page" title="Resume" subtitle="My Experience">
    <div class="resume-page__download">
      <a :href="user.resumeLink" target="_blank">
        Download Resume <ph-arrow-square-out :size="22"></ph-arrow-square-out>
      </a>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <resume-section :section="user.resume.professionalExperience"></resume-section>
      </div>
      <div class="col-lg-6">
        <resume-section :section="user.resume.education"></resume-section>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { PhArrowSquareOut } from "phosphor-vue"
import ResumeSection from "@/components/ResumeSection.vue"
import { user } from "@/utils/user"
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.resume-page {
  &__download {
    a {
      color: $color-primary;
      &:hover {
        color: $color-primary-accent;
      }
    }
  }
}
</style>
