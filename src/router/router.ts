import {createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, Router} from "vue-router";
import { routes } from "./routes/routes";

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    next();
})

export { router };