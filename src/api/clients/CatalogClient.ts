import { BaseClient } from "./BaseClient";
import { securitySend } from "../Security/Security";
import { CatalogClientContract } from "./contracts/CatalogClientContract";
import { Request } from "../request";
import { BASE_URL } from "../consts";
import { SecureResponseType } from "@/Types/SecureResponseType.ts";

export class CatalogClient extends BaseClient implements CatalogClientContract {
    constructor() {
        super();
    }

    protected baseUrl(): string {
        return BASE_URL;
    }

    public async materials(): Promise<SecureResponseType> {
        return await securitySend(this.send.bind(
            this,
            Request.get("/materials")
        ));
    }

    public async items(materialsId?: number | string, orderByPrice?: string): Promise<SecureResponseType> {
        return await securitySend(this.send.bind(
            this,
            Request.get("/items")
                .pushQuery("material", materialsId)
                .pushQuery("_sort", orderByPrice)
        ));
    }
}