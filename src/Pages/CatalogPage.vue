<script setup lang="ts">
import { MainTitle, MainSelect } from "../components/shared";
import { PagesNameConfig } from "../configs/PagesNameConfig";
import { RouteLocationNormalized, useRoute } from "vue-router";
import { onMounted } from "vue";
import CatalogCard from "../components/CatalogCard.vue";
import { CatalogService } from "../services/CatalogService";
import { CatalogClients } from "@/api";
import { CatalogFacade } from "@/facade/CatalogFacade";
import { MaterialsService } from "@/services/MaterialsService.ts";

const route: RouteLocationNormalized = useRoute()
const currentRouteCatalogParam: string = String(route.params.catalog);

function createCatalogFacade() {
	return new CatalogFacade(CatalogClients, CatalogService, MaterialsService, currentRouteCatalogParam);
}

const catalogFacade = createCatalogFacade();


onMounted(async () => {
  await catalogFacade.initCatalog();
})
</script>

<template>
  <section class="catalog">
    <main-title tag="h1">
      {{ PagesNameConfig[currentRouteCatalogParam] }}
    </main-title>
    <div class="catalog__filter">
			<main-select :select-options="" />
			<main-select :select-options="" />
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