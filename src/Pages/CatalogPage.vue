<script setup lang="ts">
import CatalogCard from "../components/CatalogCard.vue";

import { MainTitle, MainSelect } from "../components/shared";
import { PagesNameConfig } from "../configs/PagesNameConfig";
import { RouteLocationNormalized, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { CatalogService } from "../services/CatalogService";
import { CatalogClient } from "@/api";
import { CatalogFacade } from "@/facade/CatalogFacade";
import { MaterialsService } from "@/services/MaterialsService";
import { MaterialType } from "@/Types/MaterialType";

const route: RouteLocationNormalized = useRoute()
const currentRouteCatalogParam: string = String(route.params.catalog);

function createCatalogFacade() {
	return ref(new CatalogFacade(CatalogClient, CatalogService, MaterialsService, currentRouteCatalogParam));
}

const catalogFacade = createCatalogFacade();

const orderFilter: MaterialType[] = [
  {
    value: "price.current_price",
    name: "По возрастанию цены",
  },
]

catalogFacade.value.initCatalog();
</script>

<template>
  <section class="catalog">
    <main-title tag="h1">
      {{ PagesNameConfig[currentRouteCatalogParam] }}
    </main-title>
    <div class="catalog__filter">
			<main-select
        class="catalog_select"
        label="Сортировать по: "
        :select-options="orderFilter"
        @getSelectedValue="catalogFacade.updateFilter($event, 1)"
      />
			<main-select
        class="catalog_select"
        label="Материал"
        :select-options="catalogFacade.materials"
        v-if="catalogFacade.materials?.length > 0"
        @getSelectedValue="catalogFacade.updateFilter($event, 0)"
      />
    </div>
    <div class="catalog__list">
      <catalog-card
        v-for="(card) in catalogFacade.itemList"
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
  &__filter {
    display: flex;
    width: 100%;
    gap: 24px;
    flex-wrap: wrap;
    margin-bottom: adaptive-value(16px, 40px);
  }
  &_select {
    max-width: 288px;
  }
}
</style>