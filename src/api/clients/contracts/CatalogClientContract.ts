import { ResponseType } from "@/Types/ResponseType";

export interface CatalogClientContract {
    materials(): Promise<ResponseType | null>
    items(materialsId?: number | string, orderByPrice?: string): Promise<ResponseType | null>
}