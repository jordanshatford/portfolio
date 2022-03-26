<template>
  <v-container class="contactpage" title="Contact" subtitle="Contact Me">
    <div class="row mt-2">
      <div class="contactpage__col col-md-6 d-flex align-items-stretch">
        <div class="contactpage__col__container">
          <ph-envelope-simple :size="56" weight="bold"></ph-envelope-simple>
          <h3>Email:</h3>
          <p>{{ me.email }}</p>
        </div>
      </div>
      <div class="contactpage__col col-md-6 d-flex align-items-stretch">
        <div class="contactpage__col__container">
          <ph-share-network :size="56" weight="bold"></ph-share-network>
          <h3>Social Links:</h3>
          <div class="contactpage__sociallinks">
            <a
              v-for="(socialLink, socialName) in me.socials"
              :key="socialName"
              :href="socialLink"
              target="_blank"
              class="contactpage__sociallinks__link"
            >
              <simple-icon class="contactpage__sociallinks__icon" :name="socialName"></simple-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
    <contact-form class="mt-4"></contact-form>
  </v-container>
</template>

<script setup lang="ts">
import { PhEnvelopeSimple, PhShareNetwork } from "phosphor-vue"
import SimpleIcon from "@/components/SimpleIcon.vue"
import ContactForm from "@/components/ContactForm.vue"
import { me } from "@/assets/data"
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.contactpage {
  &__col {
    @media (max-width: $breakpoint-md) {
      &:nth-child(2) {
        margin-top: 1.5rem;
      }
    }
    &__container {
      color: #444444;
      padding: 20px;
      width: 100%;
      background: $color-grey;
      svg {
        font-size: 24px;
        color: $color-primary;
        border-radius: 50%;
        padding: 14px;
        float: left;
        background: $color-grey-light;
      }
      h3 {
        font-size: 20px;
        color: $color-grey-lightest;
        font-weight: 700;
        margin: 10px 0 8px 68px;
      }
      p {
        padding: 0;
        color: $color-white;
        line-height: 24px;
        font-size: 14px;
        margin: 0 0 0 68px;
      }
    }
  }
  &__sociallinks {
    padding-left: 10px;
    display: flex;
    &__link {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    &__icon {
      color: $color-white !important;
      transition: 0.3s;
      &:hover {
        color: $color-primary !important;
      }
    }
  }
}
</style>
