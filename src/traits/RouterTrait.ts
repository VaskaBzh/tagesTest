import { router } from "@/router"
import { RouteRecordName, RouteRecordNormalized } from "vue-router";

export class RouterTrait {
    public static getPrevRouteChain(): string[]  {
        const routeChain: string[] = [];
        const currentRouteName: RouteRecordName = router.currentRoute.value.name as RouteRecordName;
        let checkRoute: RouteRecordNormalized = router.resolve(
            {
                name: currentRouteName
            }
        ).matched[0];

        while (checkRoute?.meta?.prevPageName) {
            const prevPageName: string = checkRoute.meta.prevPageName as string;

            checkRoute = router.resolve(
                {
                    name: prevPageName
                }
            ).matched[0];

            if (checkRoute) {
                routeChain.unshift(prevPageName);
            }
        }

        return routeChain;
    }
}