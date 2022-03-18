<template>
  <div class="simpleicon" v-html="svg"></div>
</template>

<script setup lang="ts">
import useSimpleIcon from "@/composables/use-simple-icon"

interface Props {
  icon: string
}

const props = defineProps<Props>()

const { svg } = useSimpleIcon(props.icon)
</script>

<style lang="scss">
.simpleicon {
  svg {
    path {
      fill: currentColor;
    }
  }
}
</style>
