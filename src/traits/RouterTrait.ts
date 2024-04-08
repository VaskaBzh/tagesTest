import { router } from "@/router"
import { RouteRecordName, RouteRecord } from "vue-router";

export class RouterTrait {
    public static getPrevRouteChain(): RouteRecordName[]  {
        const routeChain: RouteRecordName[] = [];
        let currentRoute: RouteRecord = router.currentRoute.value;

        while (currentRoute?.meta?.prevPageName) {
            currentRoute = router.resolve(
                {
                    name: currentRoute.meta.prevPageName as RouteRecordName
                }
            ).matched[0];

            routeChain.unshift(currentRoute.name as RouteRecordName);
        }

        return routeChain;
    }
}