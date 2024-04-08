export class MaterialData {
    value: string | number;
    name: string;

    constructor(materialRecord: { [key: string]: any }) {
        this.value = materialRecord.id;
        this.name = materialRecord.name;
    }
}