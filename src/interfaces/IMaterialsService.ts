import { Ref} from "vue";
import { MaterialType } from "../Types/MaterialType";
import { CatalogClient } from "../api";

export interface IMaterialsService {
    materialList: Ref<MaterialType[]>
    client: typeof CatalogClient

    getMaterials(): Promise<this>
}