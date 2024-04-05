export class MaterialData {
    value: string | number;
    name: string;

    constructor(materialRecord) {
        this.value = materialRecord.id;
        this.name = materialRecord.name;
    }
}