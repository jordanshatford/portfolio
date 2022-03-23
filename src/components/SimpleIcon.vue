<template>
  <span v-if="icon" :style="{ color: `#${icon.hex}` }" class="simpleicon" v-html="icon.svg"></span>
  <ph-placeholder v-else :size="22" class="icon-item"></ph-placeholder>
</template>

<script setup lang="ts">
import SimpleIcons from "simple-icons"
import { PhPlaceholder } from "phosphor-vue"

interface Props {
  name: string
}

const props = defineProps<Props>()

function titleToSlug(title: string): string {
  return [
    [/&apos;/g, "’"],
    [/&amp;/g, "and"],
    [/\+/g, "plus"],
    [/\./g, "dot"],
    [/&/g, "and"],
    [/đ/g, "d"],
    [/ħ/g, "h"],
    [/ı/g, "i"],
    [/ĸ/g, "k"],
    [/ŀ/g, "l"],
    [/ł/g, "l"],
    [/ß/g, "ss"],
    [/ŧ/g, "t"],
    [/^(.+)$/, ($0) => $0.normalize("NFD")],
    [/[^a-z0-9]/g, ""],
  ].reduce((acc, [search, replace]) => acc.replace(search as string, replace as string), title.toLowerCase())
}

const iconSlug = titleToSlug(props.name)
const icon = SimpleIcons.Get(iconSlug)
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
