import { Ref } from "vue";
import { CatalogCardType } from "../Types/CatalogCardType";

export interface ICatalogService {
    itemList: Ref<CatalogCardType[]>;
    client: Function;
    filterList: string[];

    getItems(currentRouteCatalogParam: string): Promise<this>

    updateFilter(newFilterValue: string, valueIndex: number): this
}