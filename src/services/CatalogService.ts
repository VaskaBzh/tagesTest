import { CatalogClient } from "@/api";
import { CatalogCardType } from "@/Types/CatalogCardType";
import { ResponseTrait } from "@/traits/ResponseTrait";
import { ItemData } from "@/DTO/ItemData";
import { reactive } from "vue";
import { CatalogServiceContract } from "@/contracts/CatalogServiceContract";
import { ResponseType } from "@/Types/ResponseType.ts";
import { CatalogClientContract } from "@/api/clients/contracts/CatalogClientContract.ts";

export class CatalogService implements CatalogServiceContract {
    public itemList: CatalogCardType[] = reactive([]);
    private client: CatalogClientContract;
    protected filterList: string[] = [];

    public constructor(client: typeof CatalogClient = CatalogClient) {
        this.client = new client();
    }

    public async getItems(currentRouteCatalogParam: string = "items"): Promise<this> {
        // @ts-expect-error
        const response: ResponseType | null = await this.client[currentRouteCatalogParam](...this.filterList);

        if (!response) {
            return this;
        }

        this.itemList = ResponseTrait.getResponseData(response).map((itemRecord: CatalogCardType) => new ItemData(itemRecord));

        return this;
    }

    public updateFilter(newFilterValue: string, valueIndex: number): this {
        this.filterList[valueIndex] = newFilterValue;

        return this;
    }
}