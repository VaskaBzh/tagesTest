import { BaseClient } from "./BaseClient";
import { securitySend } from "../Security/SecurityService";
import { NullableResponseType, ResponseType } from "../types/ResponseType";
import { CatalogClientContract } from "./contracts/CatalogClientContract";
import { Request } from "../request/Request.ts";
import { BASE_URL } from "@/api/consts/ApiConsts.ts";

export class CatalogClient extends BaseClient implements CatalogClientContract {
    protected baseUrl(): string {
        return BASE_URL;
    }

    public async materials(): ResponseType {
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