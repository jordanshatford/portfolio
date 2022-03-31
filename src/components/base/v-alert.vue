<template>
  <div class="v-alert" :class="`v-alert--${variant}`"><slot></slot></div>
</template>

<script setup lang="ts">
interface Props {
  variant: "primary" | "secondary" | "success" | "danger"
}

withDefaults(defineProps<Props>(), { variant: "primary" })
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.v-alert {
  padding: 15px;
  border-radius: $border-radius-base;
  &--primary {
    background: $color-primary;  }
  &--secondary {
    background: $color-grey-lightest;
  }
  &--success {
    background: $color-success;
  }
  &--danger {
    background: $color-error;
  }
}
</style>
