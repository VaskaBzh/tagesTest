import { RouteRecordRaw } from "vue-router";
import { Component } from "vue";
import { PagesMap } from "../map/PagesMap";

export const routes: RouteRecordRaw[] = [
    {
        name: "home",
        path: "/",
        component: async (): Promise<Component> => await import(PagesMap.home),
    },
    {
        name: "store_system",
        path: "/store_system",
        component: async (): Promise<Component> => await import(PagesMap.store_system),
        meta: {
            prevPageName: "home"
        }
    },
    {
        name: "catalog",
        path: "/store_system/:catalog",
        component: async (): Promise<Component> => await import(PagesMap.catalog),
        meta: {
            prevPageName: "store_system"
        }
    },
]