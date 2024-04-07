<script setup lang="ts">
import { defineProps } from "vue";
import { RouteLocationRaw } from "vue-router";

defineProps<{
  to: RouteLocationRaw;
}>()
</script>

<template>
  <router-link :to="to" class="link-giant">
    <slot />
  </router-link>
</template>

<style scoped lang="scss">
.link {
  &-giant {
    font-family: SFProD, serif;
    font-size: 72px;
    line-height: 96px;
    font-weight: 600;
    color: var(--black, #000000);
    text-decoration: underline;
  }
}
</style>
