<template>
  <textarea class="form-control" :value="modelValue" @input="emitUpdate($event.target)" :rows="rows"></textarea>
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
textarea {
  @include base-input-style;
  padding: 12px 15px;
}
</style>
