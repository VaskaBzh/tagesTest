import { Ref} from "vue";
import { MaterialType } from "../Types/MaterialType";
import { CatalogClients } from "../api";

export interface IMaterialsService {
    materialList: Ref<MaterialType[]>
    client: typeof CatalogClients

    constructor(materialsClient: CatalogClients): void
    getMaterials(): Promise<this>

}