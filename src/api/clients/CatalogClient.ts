import { BaseClient } from "./BaseClient";
import { securitySend } from "../Security/Security";
import { CatalogClientContract } from "./contracts/CatalogClientContract";
import { Request } from "../request";
import { BASE_URL } from "../consts";
import { NullableResponseType, ResponseType } from "@/api/types/ResponseType";

export class CatalogClient extends BaseClient implements CatalogClientContract {
    protected baseUrl(): string {
        return BASE_URL;
    }

    public async materials(): Promise<NullableResponseType> {
        return await securitySend(this.send.bind(
            this,
            Request.get("/materials")
        ));
    }

    public async items(materialsId?: number | string, orderByPrice?: string): Promise<NullableResponseType> {
        return await securitySend(this.send.bind(
            this,
            Request.get("/items")
                .pushQuery("material", materialsId)
                .pushQuery("_sort", orderByPrice)
        ));
    }
}