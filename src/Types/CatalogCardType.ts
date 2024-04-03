export type CatalogCardType = {
    id: number | string,
    material: number,
    name: string,
    price: {
        old_price?: number,
        current_price: number
    },
    image: {
        url: string
    },
    code?: string
}