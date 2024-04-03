import { CatalogClients } from "../api";
import { CatalogCardType } from "../Types/CatalogCardType";
import { ResponseTrait } from "../traits/ResponseTrait";
import { ItemData } from "../DTO/ItemData";

export class CatalogService {
    itemsList: CatalogCardType[] = [];

    public async getItems(currentRouteCatalogParam: string): Promise<CatalogService> {
        const response = await new CatalogClients()[currentRouteCatalogParam]();

        if (!response) {
            return this;
        }

        this.itemsList = ResponseTrait.getResponseData(response).map((itemRecord: CatalogCardType) => new ItemData(itemRecord));

        return this;
    }
}