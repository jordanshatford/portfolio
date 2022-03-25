<template>
  <form @submit.prevent="onSubmit" role="form" class="contactform">
    <div class="row">
      <div class="col-md-6 form-group">
        <v-input type="text" name="name" id="name" placeholder="Your Name" v-model="form.name" required></v-input>
      </div>
      <div class="col-md-6 form-group mt-3 mt-md-0">
        <v-input type="email" name="email" id="email" placeholder="Your Email" v-model="form.email" required></v-input>
      </div>
    </div>
    <div class="form-group mt-3">
      <v-input type="text" name="subject" id="subject" placeholder="Subject" required v-model="form.subject"></v-input>
    </div>
    <div class="form-group mt-3">
      <v-textarea name="message" :rows="5" placeholder="Message" required v-model="form.message"></v-textarea>
    </div>
    <div class="mt-3 text-center"><v-button type="submit">Send Message</v-button></div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue"

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
})

function onSubmit() {
  console.log("Email sending functionality not implemented. ", { form })
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.contactform {
  padding: 30px;
  background: $color-grey;
}
</style>
