import { QueryParamType } from "../types/QueryParamType";

export interface RequestContract {
    uri: string
    method: string
    query: string

    pushQuery(key: string, value: QueryParamType): this

    clearQuery(): this
}