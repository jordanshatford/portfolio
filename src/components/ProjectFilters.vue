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
.projectfilters {
  padding: 0;
  margin: 0 auto 15px auto;
  list-style: none;
  text-align: center;
  border-radius: 50px;
  padding: 2px 15px;
  &__filter {
    cursor: pointer;
    display: inline-block;
    padding: 8px 16px 10px 16px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    margin: 0 3px 10px 3px;
    transition: all 0.3s ease-in-out;
    border-radius: 4px;
    &:hover,
    &--active {
      background: #18d26e;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
