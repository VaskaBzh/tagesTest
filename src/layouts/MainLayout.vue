<script setup lang="ts">
import MainBreadCrumbs from "../components/shared/MainBreadCrumbs.vue";


</script>

<template>
  <div class="layout">
    <div class="layout__container">
      <main-bread-crumbs class="layout_breadcrumbs" />
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  background: var(--white, #ffffff);
  &__container {
    max-width: calc(1488px + (adaptive-value(16px, 20px) * 2));
    margin: 0 auto;
    padding: 0 adaptive-value(16px, 20px);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  &_breadcrumbs {
    margin-bottom: adaptive-value(16px, 32px);
  }
}
</style>