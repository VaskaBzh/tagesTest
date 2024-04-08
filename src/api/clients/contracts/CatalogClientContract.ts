import { NullableResponseType, ResponseType } from "../../types/ResponseType";

export interface CatalogClientContract {
    materials(): Promise<NullableResponseType>
    items(materialsId?: number | string, orderByPrice?: string): Promise<NullableResponseType>
}