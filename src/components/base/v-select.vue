<template>
  <div class="v-select">
    <filter-icon class="v-select__icon"></filter-icon>
    <select :value="modelValue" @input="emitUpdate($event.target)">
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { FilterIcon } from "@heroicons/vue/outline"

interface Props {
  modelValue: string | number
  options: Array<string | number> | Set<string | number>
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

.v-select {
  width: 100%;
  position: relative;
  padding-bottom: 10px;
  border-radius: $border-radius-base;
  &__icon {
    width: 25px;
    top: 0.7rem;
    right: 1rem;
    position: absolute;
    color: $color-grey-lightest;
  }
  select {
    width: 100%;
    padding: 0.75rem 1.25rem;
    border-radius: $border-radius-base;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
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
}
</style>
