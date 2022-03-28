<template>
  <div class="resume-section">
    <h3 class="resume-section__title">{{ title }}</h3>
    <div v-for="(item, index) in items" :key="index" class="resume-section__item">
      <h4>{{ item.title }}</h4>
      <v-badge v-for="(range, index) in item.dateRanges" :key="index">
        {{ new Date(range.start).toLocaleString("en-US", { month: "short" }) }}
        {{ new Date(range.start).getFullYear() }} -
        <span v-if="range.end">{{ new Date(range.end).toLocaleString("en-US", { month: "short" }) }}</span>
        {{ range.end ? new Date(range.end).getFullYear() : "Present" }}
      </v-badge>
      <p>{{ item.organization }}, {{ item.location }}</p>
      <div class="resume-section__item__long-description">
        <p v-if="item.descriptions?.length === 1">{{ item.descriptions[0] }}</p>
        <div v-else>
          <ul>
            <li v-for="(description, index) in item.descriptions" :key="index">{{ description }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  items: {
    title: string
    dateRanges: {
      start: string
      end: string | null
    }[]
    organization: string
    location: string
    descriptions: string[]
  }[]
}

defineProps<Props>()
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/variables";
.resume-section {
  &__title {
    font-size: $font-xl;
    font-weight: $font-bold;
    margin-top: 20px;
    margin-bottom: 20px;
    color: $color-white;
  }
  &__item {
    padding: 0 0 20px 20px;
    margin-top: -2px;
    border-left: 2px solid $color-grey-light;
    position: relative;
    h4 {
      line-height: 18px;
      font-size: $font-md;
      font-weight: $font-bold;
      text-transform: uppercase;
      color: $color-primary;
      margin-bottom: 10px;
    }
    ul {
      padding-left: 20px;
      li {
        padding-bottom: 10px;
      }
    }
    &:last-child {
      padding-bottom: 0;
    }
    &::before {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50px;
      left: -9px;
      top: 0;
      background: $color-primary;
      border: 2px solid $color-primary;
    }
    &__long-description {
      color: $color-grey-lightest;
    }
  }
}
</style>
