<script setup lang="ts">
import { GiantLink, MainTitle } from "../components/shared";
</script>

<template>
  <section class="home">
    <main-title tag="h1">
      Главная
    </main-title>
    <giant-link :to="{ name: 'store_system' }">
      Системы хранения
    </giant-link>
  </section>
</template>

<style scoped lang="scss">

</style>