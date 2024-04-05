export class MaterialData {
    value: string | number;
    name: string;

    constructor(materialRecord) {
        this.value = materialRecord.value;
        this.name = materialRecord.name;
    }
}