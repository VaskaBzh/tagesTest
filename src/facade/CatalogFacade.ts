import { CatalogService } from "@/services/CatalogService";
import { CatalogCardType } from "@/Types/CatalogCardType";
import { MaterialsService } from "@/services/MaterialsService";
import { MaterialType } from "@/Types/MaterialType";
import { CatalogFacadeContract } from "@/contracts/CatalogFacadeContract";
import { CatalogServiceContract } from "@/contracts/CatalogServiceContract.ts";
import { MaterialsServiceContract } from "@/contracts/MaterialsServiceContract.ts";
import { CatalogClient } from "@/api";
import { reactive } from "vue";

export class CatalogFacade implements CatalogFacadeContract {
    private catalogService: CatalogServiceContract
    private materialsService: MaterialsServiceContract
    private readonly currentRouteCatalogParam: string = ""

    // getters
    public get itemList(): CatalogCardType[] {
        return this.catalogService.itemList;
    }

    public get materials(): MaterialType[] {
        return this.materialsService.materialList;
    }

    public constructor(
        client: typeof CatalogClient,
        catalogService: typeof CatalogService,
        materialsService: typeof MaterialsService,
        currentRouteCatalogParam: string = "items"
    ) {
        this.currentRouteCatalogParam = currentRouteCatalogParam

        this.catalogService = reactive(new catalogService(client));
        this.materialsService = reactive(new materialsService(client));

        this.getItems();
        this.getMaterials();
    }

    // methods

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