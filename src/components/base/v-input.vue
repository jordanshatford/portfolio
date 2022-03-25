<template>
  <input class="v-input form-control" :value="modelValue" @input="emitUpdate($event.target)" />
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
@import "@/assets/scss/abstracts/mixins";
.v-input {
  @include base-input-style;
  padding: 0.75rem 1.25rem;
}
</style>
