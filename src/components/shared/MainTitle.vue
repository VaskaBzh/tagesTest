<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  }
})
</script>

<template>
  <component :is="props.tag" class="title">
    <slot />
  </component>
</template>

<style scoped lang="scss">
.title {
  font-family: SFProD, serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 48px;
  margin-bottom: adaptive-value(16px, 32px);
}
</style>
