import { Ref } from "vue";
import { CatalogCardType } from "../Types/CatalogCardType";
import { CatalogClients } from "../api";

export interface ICatalogService {
    itemList: Ref<CatalogCardType[]>;
    client: Function;
    filterList: string[];

    constructor(client: CatalogClients): void
    getItems(currentRouteCatalogParam: string): Promise<this>

    updateFilter(newFilterValue: string, valueIndex: number): this
}