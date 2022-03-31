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
@import "@/assets/scss/abstracts/mixins";
.v-textarea {
  @include base-input-style;
  padding: 0.85rem 1.25rem;
  border-radius: $border-radius-base;
  width: 100%;
  &:focus {
    outline: 0;
  }
}
</style>
