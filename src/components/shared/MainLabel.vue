<script setup lang="ts">
</script>

<template>
  <span class="label">
    <slot />
  </span>
</template>

<style scoped lang="scss">
.label {
  color: var(--gray, #4F4F4F);
  font-size: 12px;
  line-height: 150%;
  font-family: SFProD, serif;
  font-weight: 400;
}
</style>