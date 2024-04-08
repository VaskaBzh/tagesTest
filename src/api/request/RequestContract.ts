export interface RequestContract {
    uri: string
    method: string
    query: string

    pushQuery(key: string, value: unknown): this

    clearQuery(): this
}