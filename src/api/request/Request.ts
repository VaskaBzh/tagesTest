import { QueryParamType } from "../types/QueryParamType";

export class Request {
    public uri: string
    public method: string
    public query: string = ""

    protected constructor(newMethod: string, newUri: string) {
        this.method = newMethod;
        this.uri = newUri;
    }

    public pushQuery(key: string, value: QueryParamType): this {
        if (!value) {
            return this;
        }

        if (this.query.length <= 0) {
            this.query += "?"
        } else {
            this.query += "&"
        }

        this.query += `${key}=${value}`

        return this;
    }

    public clearQuery(): this {
        this.query = ""

        return this;
    }

    public static get(uri: string): Request {
        return new Request("get", uri)
    }
}