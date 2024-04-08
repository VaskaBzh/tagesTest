import { CatalogCardType } from "../Types/CatalogCardType";
import { MaterialType } from "../Types/MaterialType";
import { CatalogClientContract } from "@/api";
import { MaterialsService } from "../services/MaterialsService";
import { CatalogService } from "../services/CatalogService";

export interface CatalogFacadeContract {
    get itemList(): CatalogCardType[]
    get materials(): MaterialType[]

    initCatalog(
        client: CatalogClientContract,
        catalogService: CatalogService,
        materialsService: MaterialsService,
        currentRouteCatalogParam: string
    ): Promise<this>

    getItems(): Promise<this>

    getMaterials(): Promise<this>

    updateFilter(newFilterValue: string, valueIndex: number): Promise<this>
}