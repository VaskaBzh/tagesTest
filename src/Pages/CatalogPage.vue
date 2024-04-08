<script setup lang="ts">
import CatalogCard from "../components/CatalogCard.vue";

import { MainTitle, MainSelect } from "../components/shared";
import { PagesNameConfig } from "../configs/PagesNameConfig";
import { RouteLocationNormalized, useRoute } from "vue-router";
import { ref, Ref } from "vue";
import { CatalogService } from "../services/CatalogService";
import { CatalogClient } from "@/api";
import { CatalogFacade } from "@/facade/CatalogFacade";
import { MaterialsService } from "@/services/MaterialsService";
import { MaterialType } from "@/Types/MaterialType";
import { CatalogFacadeContract } from "@/contracts/CatalogFacadeContract";

const route: RouteLocationNormalized = useRoute()
const currentRouteCatalogParam: string = String(route.params.catalog);

const catalogFacade: Ref<CatalogFacadeContract> = ref(
  new CatalogFacade(
    CatalogClient,
    CatalogService,
    MaterialsService,
    currentRouteCatalogParam
  )
);

const orderFilter: MaterialType[] = [
  {
    value: "price.current_price",
    name: "По возрастанию цены",
  },
]
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
        class="catalog_card"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.catalog {
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: adaptive-value(16px, 48px) adaptive-value(12px, 40px);
    @media (max-width: $pc) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: $tablet) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: $mobile) {
      grid-template-columns: 1fr;
    }
  }
  &__filter {
    display: flex;
    width: 100%;
    gap: 24px;
    flex-wrap: wrap;
    margin-bottom: adaptive-value(16px, 40px);
  }
  &_card {
    max-width: 100%;
  }
  &_select {
    max-width: 288px;
    @media (max-width: $mobile) {
      max-width: 100%;
    }
  }
}
</style>