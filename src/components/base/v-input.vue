<template>
  <input class="v-input" :value="modelValue" @input="emitUpdate($event.target)" />
</template>

<script setup lang="ts">
interface Props {
  modelValue: string | number
}

const props = defineProps<Props>()

const emits = defineEmits<{
  (e: "update:modelValue", value: string | number): void
}>()

function emitUpdate(target: EventTarget | null) {
  emits("update:modelValue", (target as HTMLFormElement).value as typeof props.modelValue)
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.v-input {
  padding: 0.75rem 1.25rem;
  width: 100%;
  border-radius: $border-radius-base;
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
