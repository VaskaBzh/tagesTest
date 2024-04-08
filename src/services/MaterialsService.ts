import { MaterialType } from "../Types/MaterialType";
import { ResponseTrait } from "../traits/ResponseTrait";
import { ref, Ref } from "vue";
import { MaterialData } from "../DTO/MaterialData";
import { MaterialsServiceContract } from "@/contracts/MaterialsServiceContract";
import { CatalogClientContract } from "@/api/clients/contracts/CatalogClientContract";
import { ResponseType } from "@/Types/ResponseType";

export class MaterialsService implements MaterialsServiceContract {
    protected materialList: Ref<MaterialType[]> = ref([]);
    private client: CatalogClientContract;

    public constructor(materialsClient: CatalogClientContract) {
        this.client = new materialsClient();
    }

    public async getMaterials(): Promise<this> {
        const response: ResponseType = await this.client.materials();

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