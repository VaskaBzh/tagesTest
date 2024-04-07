import { BaseClient } from "./BaseClient";
import { SecurityService } from "../Security/SecurityService";
import { NullableResponseType, ResponseType } from "../types/ResponseType";
import { CatalogClientContract } from "./contracts/CatalogClientContract";

export class CatalogClient extends BaseClient implements CatalogClientContract {
    public async materials(): ResponseType {
        return await this.setUri("/materials")
            .setMethod("get")
            .send()
    }

    public async items(materialsId?: number | string, orderByPrice?: string): Promise<NullableResponseType> {
        this.setUri("/items")
            .setMethod("get")

        this.pushQuery({
            material: materialsId,
            _sort: orderByPrice,
        })

        return SecurityService.securitySend(this.send.bind(this));
    }
}