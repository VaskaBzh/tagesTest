import { CatalogCardType } from "../Types/CatalogCardType";
import { MaterialType } from "../Types/MaterialType";

export interface CatalogFacadeContract {
    get itemList(): CatalogCardType[]
    get materials(): MaterialType[]

    getItems(): Promise<this>

    getMaterials(): Promise<this>

    updateFilter(newFilterValue: string, valueIndex: number): Promise<this>
}