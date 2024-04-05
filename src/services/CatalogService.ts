import { CatalogClients } from "../api";
import { CatalogCardType } from "../Types/CatalogCardType";
import { ResponseTrait } from "../traits/ResponseTrait";
import { ItemData } from "../DTO/ItemData";
import { Ref, ref } from "vue";
import { NullableResponseType } from "../api/types/ResponseType.ts";

export class CatalogService {
    itemList: Ref<CatalogCardType[]> = ref([]);
    client: Function;
    filterList: string[] = [];

    public constructor(client: CatalogClients = CatalogClients, currentRouteCatalogParam: string = "items") {
        this.client = (new client())[currentRouteCatalogParam];
    };

    public async getItems(): Promise<CatalogService> {
        const response: NullableResponseType = await this.client(...this.filterList);

        if (!response) {
            return this;
        }

        this.itemList.value = ResponseTrait.getResponseData(response).map((itemRecord: CatalogCardType) => new ItemData(itemRecord));

        return this;
    }

    public updateFilter(newFilterValue: string, valueIndex: number): CatalogService {
        this.filterList.splice(valueIndex, 1, newFilterValue)

        return this;
    }
}