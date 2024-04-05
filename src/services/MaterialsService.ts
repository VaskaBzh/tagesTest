import { CatalogClients } from "../api";
import { MaterialType } from "../Types/MaterialType.ts";
import { ResponseTrait } from "../traits/ResponseTrait.ts";
import { Ref } from "vue";
import {MaterialData} from "../DTO/MaterialData.ts";

export class MaterialsService {
    materialList: Ref<MaterialType[]>;
    client: Function;

    constructor(materialsClient: CatalogClients) {
        this.client = (new materialsClient()).materials;
    }
    public async getMaterials() {
        const response = this.client();

        if (!response) {
            return this;
        }

        this.materialList.value = ResponseTrait.getResponseData(response).map((materialRecord: MaterialType) => new MaterialData(materialRecord));

        return this;
    }
}