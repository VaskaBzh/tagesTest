<script setup lang="ts">
import { MainTitle } from "../components/shared";
import { PagesNameConfig } from "../configs/PagesNameConfig";
import { RouteLocationNormalized, useRoute } from "vue-router";
import { onMounted } from "vue";
import { CatalogService } from "../services/CatalogService.ts";

const route: RouteLocationNormalized = useRoute()
const currentRouteCatalogParam: string = String(route.params.catalog);

const catalogService: CatalogService = new CatalogService();

onMounted(async () => {
  await catalogService.getItems(currentRouteCatalogParam);
})
</script>

<template>
  <section class="catalog">
    <main-title tag="h1">
      {{ PagesNameConfig[currentRouteCatalogParam] }}
    </main-title>
  </section>
</template>

<style scoped lang="scss">

</style>