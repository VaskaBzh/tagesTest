import { NullableResponseType, ResponseType } from "../../types/ResponseType";

export interface CatalogClientContract {
    materials(): ResponseType
    items(materialsId?: number | string, orderByPrice?: string): Promise<NullableResponseType>
}