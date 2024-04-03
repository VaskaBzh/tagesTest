<script setup lang="ts">
import { GiantLink, MainTitle } from "../components/shared";
</script>

<template>
  <section class="home">
    <main-title tag="h1">
      Системы хранения
    </main-title>
    <giant-link
      :to="
        {
          name: 'catalog',
          params: {
            catalog: 'items'
          }
        }
      "
    >
      Комплекты стеллажных систем
    </giant-link>
  </section>
</template>

<style scoped lang="scss">

</style>