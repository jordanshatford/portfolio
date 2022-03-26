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
    <div class="contactform__alert">
      <div v-if="isSending" class="contactform__alert--loading">Sending...</div>
      <div v-if="hasErrorSending" class="contactform__alert--error">Error Sending Message</div>
      <div v-if="hasSuccessSending" class="contactform__alert--success">Your message has been sent</div>
    </div>
    <div class="mt-3 text-center"><v-button :disabled="isSending" type="submit">Send Message</v-button></div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import emailjs from "@emailjs/browser"
import { config } from "@/utils/config"

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
  background: $color-grey;
  &__alert {
    margin-top: 1rem;
    text-align: left;
    font-weight: $font-bold;
    &--error {
      padding: 15px;
      background: $color-error;
    }
    &--success {
      padding: 15px;
      background: $color-success;
    }
    &--loading {
      padding: 15px;
      background: $color-grey-lightest;
    }
  }
}
</style>
