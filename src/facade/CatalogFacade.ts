import { CatalogService } from "@/services/CatalogService";
import { CatalogClient } from "@/api";
import { CatalogCardType } from "../Types/CatalogCardType";
import { MaterialsService } from "@/services/MaterialsService";
import { MaterialType } from "../Types/MaterialType";
import { CatalogFacadeContract } from "@/contracts/CatalogFacadeContract";
import { CatalogClientContract } from "@/api";

export class CatalogFacade implements CatalogFacadeContract {
    private catalogService: CatalogService
    private materialsService: MaterialsService
    private currentRouteCatalogParam: string = ""

    // getters
    public get itemList(): CatalogCardType[] {
        return this.catalogService?.itemList.value;
    }

    public get materials(): MaterialType[] {
        return this.materialsService?.materialList.value;
    }

    // methods

    public async initCatalog(
        client: CatalogClientContract = CatalogClient,
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