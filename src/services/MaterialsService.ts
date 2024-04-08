import { MaterialType } from "@/Types/MaterialType";
import { ResponseTrait } from "@/traits/ResponseTrait";
import { reactive } from "vue";
import { MaterialData } from "@/DTO/MaterialData";
import { MaterialsServiceContract } from "@/contracts/MaterialsServiceContract";
import { CatalogClientContract } from "@/api/clients/contracts/CatalogClientContract";
import { ResponseType } from "@/Types/ResponseType";
import { CatalogClient } from "@/api";

export class MaterialsService implements MaterialsServiceContract {
    public materialList: MaterialType[] = reactive([]);
    private client: CatalogClientContract;

    public constructor(materialsClient: typeof CatalogClient) {
        this.client = new materialsClient();
    }

    public async getMaterials(): Promise<this> {
        const response: ResponseType | null = await this.client.materials();

        if (!response) {
            return this;
        }

        this.materialList = ResponseTrait
            .getResponseData(response)
            .map(
                (materialRecord: MaterialType) => new MaterialData(materialRecord)
            );

        return this;
    }
}