import { CatalogCardType } from "@/Types/CatalogCardType.ts";

export interface CatalogServiceContract {
    itemList: CatalogCardType[]
    getItems(currentRouteCatalogParam: string): Promise<this>

    updateFilter(newFilterValue: string, valueIndex: number): this
}