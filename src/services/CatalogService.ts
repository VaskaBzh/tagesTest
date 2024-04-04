import { CatalogClients } from "../api";
import { CatalogCardType } from "../Types/CatalogCardType";
import { ResponseTrait } from "../traits/ResponseTrait";
import { ItemData } from "../DTO/ItemData";
import { Ref, ref } from "vue";

export class CatalogService {
    itemsList: Ref<CatalogCardType[]> = ref([]);

    public async getItems(currentRouteCatalogParam: string): Promise<CatalogService> {
        const response = await new CatalogClients()[currentRouteCatalogParam]();

        if (!response) {
            return this;
        }

        this.itemsList.value = ResponseTrait.getResponseData(response).map((itemRecord: CatalogCardType) => new ItemData(itemRecord));

        return this;
    }
}