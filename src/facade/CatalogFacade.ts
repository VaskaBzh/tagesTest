import { CatalogService } from "@/services/CatalogService";
import { CatalogClients } from "../api";
import { CatalogCardType } from "../Types/CatalogCardType";
import { MaterialsService } from "@/services/MaterialsService";

export class CatalogFacade {
    catalogService: CatalogService

    public async initCatalog(
        client: CatalogClients = CatalogClients,
        catalogService: CatalogService = CatalogService,
        materialsService: MaterialsService = MaterialsService,
        currentRouteCatalogParam: string = "items"
    ): Promise<CatalogFacade> {
        this.catalogService = new catalogService(client, currentRouteCatalogParam)
        this.materialsService = new materialsService(client)

        await this.getItems();
        await this.getMaterials();

        return this;
    }

    public async getItems(): Promise<CatalogFacade> {
        await this.catalogService.getItems();

        return this;
    }

    public async getMaterials(): Promise<CatalogFacade> {
        await this.materialsService.getMaterials();

        return this;
    }

    public get itemList(): CatalogCardType[] {
        return this.catalogService.itemList.value
    }

    public async updateFilter(newFilterValue: string, valueIndex: number) {
        this.catalogService.updateFitler(newFilterValue, valueIndex);

        await this.getItems();
    }
}