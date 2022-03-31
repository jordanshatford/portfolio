<template>
  <form @submit.prevent="onSubmit" role="form" class="contactform">
    <div class="row">
      <div class="col-md-6">
        <v-input type="text" name="name" id="name" placeholder="Your Name" v-model="form.name" required></v-input>
      </div>
      <div class="col-md-6 mt-3 mt-md-0">
        <v-input type="email" name="email" id="email" placeholder="Your Email" v-model="form.email" required></v-input>
      </div>
    </div>
    <div class="mt-3">
      <v-input type="text" name="subject" id="subject" placeholder="Subject" required v-model="form.subject"></v-input>
    </div>
    <div class="mt-3">
      <v-textarea name="message" :rows="5" placeholder="Message" required v-model="form.message"></v-textarea>
    </div>
    <div class="contactform__alert">
      <v-alert v-if="isSending" variant="secondary">Sending...</v-alert>
      <v-alert v-if="hasErrorSending" variant="danger">Error sending message.</v-alert>
      <v-alert v-if="hasSuccessSending" variant="success">Message sent!</v-alert>
    </div>
    <div class="mt-3 text-center"><v-button :disabled="isSending" type="submit">Send Message</v-button></div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import emailjs from "@emailjs/browser"
import { config } from "@/assets/config"

const isSending = ref<boolean>(false)
const hasErrorSending = ref<boolean>(false)
const hasSuccessSending = ref<boolean>(false)

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
})

function onSubmit() {
  isSending.value = true
  emailjs.send(config.EMAILJS_SERVICE_ID, config.EMAILJS_TEMPLATE_ID, form, config.EMAILJS_USER_ID).then(
    () => {
      // Send successful
      isSending.value = false
      hasSuccessSending.value = true
      form.name = ""
      form.email = ""
      form.subject = ""
      form.message = ""
    },
    () => {
      // Send failed
      isSending.value = false
      hasErrorSending.value = true
    }
  )
  setTimeout(() => {
    hasErrorSending.value = false
    hasSuccessSending.value = false
  }, 3000)
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.contactform {
  padding: 30px;
  border-radius: $border-radius-base;
  background: $color-grey;
  &__alert {
    margin-top: 1rem;
    text-align: left;
    font-weight: $font-bold;
  }
}
</style>
