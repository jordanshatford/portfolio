<template>
  <v-container class="resume" title="Resume" subtitle="My Experience">
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
import ResumeSection from "@/components/ResumeSection.vue"
import { user } from "@/utils/user"
</script>
