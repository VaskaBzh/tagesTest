export class MaterialsData {
    id: string | number;
    name: string;

    constructor(materialRecord) {
        this.id = materialRecord.id;
        this.name = materialRecord.name;
    }
}