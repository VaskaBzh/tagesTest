import { BaseClient } from "./BaseClient.ts";
import {AxiosResponse} from "axios";
import {SecurityService} from "../Security/SecurityService.ts";
import { NullableResponseType } from "../types/ResponseType.ts";

export class CatalogClients extends BaseClient {
    public async materials(): Promise<AxiosResponse<any, any>> {
        return await this.setUri("/materials")
            .setMethod("get")
            .send()
    }

    public async items(materialsId?: number | string, orderByPrice?: string): Promise<NullableResponseType> {
        this.setUri("/items")
            .setMethod("get")

        this.pushQuery({
            materials: materialsId,
            _sort: orderByPrice,
        })


        return SecurityService.securitySend(this.send.bind(this));
    }
}