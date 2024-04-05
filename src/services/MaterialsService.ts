import { CatalogClients } from "../api";
import { MaterialType } from "../Types/MaterialType";
import { ResponseTrait } from "../traits/ResponseTrait";
import { ref, Ref } from "vue";
import { MaterialData } from "../DTO/MaterialData";
import { IMaterialsService } from "../interfaces/IMaterialsService";

export class MaterialsService implements IMaterialsService {
    materialList: Ref<MaterialType[]> = ref([]);
    client: typeof CatalogClients;

    public constructor(materialsClient: typeof CatalogClients) {
        this.client = new materialsClient();
    }

    public async getMaterials(): Promise<this> {
        const response = await this.client.materials();

        if (!response) {
            return this;
        }

        this.materialList.value = ResponseTrait
            .getResponseData(response)
            .map(
                (materialRecord: MaterialType) => new MaterialData(materialRecord)
            );

        return this;
    }
}