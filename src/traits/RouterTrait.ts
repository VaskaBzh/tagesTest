import { router } from "../router"
import {RouteLocationNormalizedLoaded, RouteRecord, RouteRecordName} from "vue-router";

export class RouterTrait {
    public static getPrevRouteChain(): string[]  {
        const routeChain: string[] = [];
        let currentRoute: RouteLocationNormalizedLoaded = router.currentRoute.value;

        while (currentRoute?.meta?.prevPageName) {
            currentRoute = router.resolve(
                {
                    name: currentRoute.meta.prevPageName as RouteRecordName
                }
            ).matched[0];

            routeChain.unshift(currentRoute.name as string);
        }

        return routeChain;
    }
}