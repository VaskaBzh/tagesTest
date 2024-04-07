import { CatalogClient } from "../api";
import { CatalogCardType } from "../Types/CatalogCardType";
import { ResponseTrait } from "../traits/ResponseTrait";
import { ItemData } from "../DTO/ItemData";
import { Ref, ref } from "vue";
import { NullableResponseType } from "../api/types/ResponseType.ts";
import { ICatalogService } from "../interfaces/ICatalogService.ts";

export class CatalogService implements ICatalogService {
    itemList: Ref<CatalogCardType[]> = ref([]);
    client: typeof CatalogClient;
    filterList: string[] = [];

    public constructor(client: CatalogClient = CatalogClient) {
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