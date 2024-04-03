<script setup lang="ts">
</script>

<template>
  <router-link class="link-giant">
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
