import { MaterialType } from "@/Types/MaterialType";

export interface MaterialsServiceContract {
    materialList: MaterialType[]
    getMaterials(): Promise<this>
}