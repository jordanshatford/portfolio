<template>
  <v-container class="resume-page" title="Resume" subtitle="My Experience">
    <div class="row">
      <div class="col-lg-6">
        <resume-section title="Professional Experience" :items="experiences"></resume-section>
      </div>
      <div class="col-lg-6">
        <resume-section title="Education" :items="educations"></resume-section>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import ResumeSection from "@/components/ResumeSection.vue"
import { experiences, educations } from "@/assets/data"
</script>
