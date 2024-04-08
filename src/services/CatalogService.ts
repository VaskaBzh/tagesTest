import { CatalogClient } from "@/api";
import { CatalogCardType } from "../Types/CatalogCardType";
import { ResponseTrait } from "../traits/ResponseTrait";
import { ItemData } from "../DTO/ItemData";
import { Ref, ref } from "vue";
import { NullableResponseType } from "../api/types/ResponseType.ts";
import { CatalogServiceContract } from "@/contracts/CatalogServiceContract";
import { CatalogClientContract } from "@/api/clients/contracts/CatalogClientContract";

export class CatalogService implements CatalogServiceContract {
    protected itemList: Ref<CatalogCardType[]> = ref([]);
    private client: CatalogClientContract;
    protected filterList: string[] = [];

    public constructor(client: CatalogClientContract = CatalogClient) {
        this.client = new client();
    }

    public async getItems(currentRouteCatalogParam: string = "items"): Promise<this> {
        const response: NullableResponseType = await this.client[currentRouteCatalogParam](...this.filterList);

        if (!response) {
            return this;
        }

        this.itemList.value = ResponseTrait.getResponseData(response).map((itemRecord: CatalogCardType) => new ItemData(itemRecord));

        return this;
    }

    public updateFilter(newFilterValue: string, valueIndex: number): this {
        this.filterList.splice(valueIndex, 1, newFilterValue)

        return this;
    }
}