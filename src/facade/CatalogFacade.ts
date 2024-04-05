import { CatalogService } from "@/services/CatalogService";
import { CatalogClients } from "../api";
import { CatalogCardType } from "../Types/CatalogCardType";
import { MaterialsService } from "@/services/MaterialsService";
import { MaterialType } from "../Types/MaterialType";

export class CatalogFacade {
    catalogService: CatalogService
    materialsService: MaterialsService
    currentRouteCatalogParam: string

    // getters
    public get itemList(): CatalogCardType[] {
        return this.catalogService?.itemList.value;
    }

    public get materials(): MaterialType[] {
        return this.materialsService?.materialList.value;
    }

    // methods

    public async initCatalog(
        client: CatalogClients = CatalogClients,
        catalogService: CatalogService = CatalogService,
        materialsService: MaterialsService = MaterialsService,
        currentRouteCatalogParam: string = "items"
    ): Promise<this> {
        this.currentRouteCatalogParam = currentRouteCatalogParam

        this.catalogService = new catalogService(client, currentRouteCatalogParam)
        this.materialsService = new materialsService(client)

        await this.getItems();
        await this.getMaterials();

        return this;
    }

    public async getItems(): Promise<this> {
        await this.catalogService.getItems(this.currentRouteCatalogParam);

        return this;
    }

    public async getMaterials(): Promise<this> {
        await this.materialsService.getMaterials();

        return this;
    }

    public async updateFilter(newFilterValue: string, valueIndex: number): Promise<this> {
        this.catalogService.updateFilter(newFilterValue, valueIndex);

        await this.getItems();

        return this;
    }
}