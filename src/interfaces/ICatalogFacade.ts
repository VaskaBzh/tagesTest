import {CatalogCardType} from "../Types/CatalogCardType";
import {MaterialType} from "../Types/MaterialType";
import {CatalogClient} from "../api";
import {MaterialsService} from "../services/MaterialsService";
import {CatalogService} from "../services/CatalogService";

export interface ICatalogFacade {
    catalogService: CatalogService
    materialsService: MaterialsService
    currentRouteCatalogParam: string

    get itemList(): CatalogCardType[]
    get materials(): MaterialType[]

    initCatalog(
        client: CatalogClient,
        catalogService: CatalogService,
        materialsService: MaterialsService,
        currentRouteCatalogParam: string
    ): Promise<this>

    getItems(): Promise<this>

    getMaterials(): Promise<this>

    updateFilter(newFilterValue: string, valueIndex: number): Promise<this>
}