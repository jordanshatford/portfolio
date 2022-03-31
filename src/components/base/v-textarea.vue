<template>
  <textarea class="v-textarea" :value="modelValue" @input="emitUpdate($event.target)" :rows="rows"></textarea>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  rows?: number
}

withDefaults(defineProps<Props>(), { rows: 5 })

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()

function emitUpdate(target: EventTarget | null) {
  emits("update:modelValue", (target as HTMLFormElement).value)
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.v-textarea {
  padding: 0.85rem 1.25rem;
  border-radius: $border-radius-base;
  width: 100%;
  box-shadow: none;
  font-size: $font-base;
  background: $color-grey-light;
  border: 0;
  transition: 0.3s;
  color: $color-white;
  &:focus {
    color: $color-white;
    border: 0;
    outline: 0;
    box-shadow: none;
    background-color: $color-grey-lighter;
  }
  &::-moz-placeholder {
    color: $color-grey-lightest;
    opacity: 1;
  }
  &::placeholder {
    color: $color-grey-lightest;
    opacity: 1;
  }
}
</style>
