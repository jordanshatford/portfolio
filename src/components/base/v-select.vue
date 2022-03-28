<template>
  <div class="v-select">
    <ph-funnel class="v-select__icon" :size="24" weight="bold"></ph-funnel>
    <select :value="modelValue" @input="emitUpdate($event.target)">
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { PhFunnel } from "phosphor-vue"

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
@import "@/assets/scss/abstracts/mixins";

.v-select {
  width: 100%;
  position: relative;
  padding-bottom: 10px;
  &__icon {
    top: 0.7rem;
    right: 1rem;
    position: absolute;
    color: $color-grey-lightest;
  }
  select {
    @include base-input-style;
    width: 100%;
    padding: 0.75rem 1.25rem;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
}
</style>
