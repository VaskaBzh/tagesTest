import { router } from "../router"
import { RouteLocationNormalizedLoaded } from "vue-router";

export class RouterTrait {
    public static getPrevRouteChain(): string[]  {
        const routeChain: string[] = [];
        let currentRoute: RouteLocationNormalizedLoaded | null = router.currentRoute.value;

        while (currentRoute?.meta?.prevPageName) {
            currentRoute = router.resolve(
                {
                    name: currentRoute.meta.prevPageName
                }
            ).matched[0];

            routeChain.unshift(currentRoute.name);
        }

        return routeChain;
    }
}