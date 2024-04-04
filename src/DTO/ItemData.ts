export class ItemData {
    id: number | string;
    material: number;
    name: string;
    price: {
        old_price?: number;
        current_price: number;
    };
    image: {
        url: string;
    };
    code?: string;

    constructor(itemRecord) {
        this.id = itemRecord.id;
        this.material = itemRecord.material;
        this.name = itemRecord.name;
        this.price = {
            old_price: Math.floor(itemRecord.price.old_price),
            current_price: Math.floor(itemRecord.price.current_price),
        };
        this.image = {
            url: itemRecord.image.url
        };
        this.code = itemRecord.code;
    }
}