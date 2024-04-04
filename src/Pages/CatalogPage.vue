<script setup lang="ts">
import { MainTitle } from "../components/shared";
import { PagesNameConfig } from "../configs/PagesNameConfig";
import { RouteLocationNormalized, useRoute } from "vue-router";
import { onMounted } from "vue";
import { CatalogService } from "../services/CatalogService.ts";
import CatalogCard from "../components/CatalogCard.vue";

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
    <div class="catalog__filter">

    </div>
    <div class="catalog__list">
      <catalog-card
        v-for="(card) in catalogService.itemsList.value"
        :key="card.id"
        :card="card"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: adaptive-value(16px, 48px) adaptive-value(12px, 40px);
    justify-content: flex-start;
  }
}
</style>