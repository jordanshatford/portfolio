<template>
  <v-container class="resume-page" title="Resume" subtitle="My Experience">
    <div class="row">
      <div class="col-lg-6">
        <resume-section title="Professional Experience" :items="info.experiences"></resume-section>
      </div>
      <div class="col-lg-6">
        <resume-section title="Education" :items="info.educations"></resume-section>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import ResumeSection from "@/components/ResumeSection.vue"
import { info } from "@/assets/info"
</script>
