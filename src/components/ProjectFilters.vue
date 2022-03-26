<template>
  <ul class="projectfilters">
    <li
      v-for="(option, index) in options"
      @click="emits('update:modelValue', option)"
      :key="index"
      class="projectfilters__filter"
      :class="{ 'projectfilters__filter--active': modelValue === option }"
    >
      {{ option }}
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  options: Set<string>
}

defineProps<Props>()

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";

.projectfilters {
  padding: 0;
  list-style: none;
  text-align: center;
  &__filter {
    cursor: pointer;
    display: inline-block;
    padding: 0.5rem 0.8rem 0.6rem 0.8rem;
    font-size: $font-sm;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    color: $color-white;
    background: $color-grey-light;
    margin: 0 0.3rem 0.5rem 0.3rem;
    border-radius: 0.2rem;
    &:hover,
    &--active {
      background: $color-primary;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
