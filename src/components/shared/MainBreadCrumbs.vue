<script setup lang="ts">
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";
import { computed, ComputedRef } from "vue";
import { PagesNameConfig } from "@/configs/PagesNameConfig";
import { RouterTrait } from "@/traits/RouterTrait";

const route: RouteLocationNormalizedLoaded = useRoute();

const breadCrumbsList: ComputedRef<string[]> = computed(() => RouterTrait.getPrevRouteChain());

const FIRST_PARAM_INDEX: number = 0;

const configKeyByRoute: ComputedRef<string> = computed(() =>
  Object.values(route.params)[FIRST_PARAM_INDEX] as string ??
  route.name
)

const currentRouteName: ComputedRef<string> = computed(() =>
  PagesNameConfig[configKeyByRoute.value]
)
</script>

<template>
  <div class="breadcrumbs" v-if="breadCrumbsList.length > 0">
    <router-link
      class="breadcrumbs_link"
      :to="{ name: linkName }"
      :key="`${linkName} ${breadCrumbIndex}`"
      v-for="(linkName, breadCrumbIndex) in breadCrumbsList"
    >
      {{ PagesNameConfig[linkName] }}
    </router-link>
    <span class="breadcrumbs_link breadcrumbs_link-disabled">
      {{ currentRouteName }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.breadcrumbs {
  &_link {
    font-family: SFUIText, serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-decoration: none;
    color: var(--gray-breadcrumbs, #828282);
    transition: all 0.2s ease 0s;
    &-disabled {
      color: var(--black, #000000);
    }
    &:not(:first-child) {
      &:before {
        content: " / ";
        color: var(--gray-devider, #727783);
      }
    }
  }
}
</style>