export interface CatalogServiceContract {
    getItems(currentRouteCatalogParam: string): Promise<this>

    updateFilter(newFilterValue: string, valueIndex: number): this
}