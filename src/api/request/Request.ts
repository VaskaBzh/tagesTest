import { RequestContract } from "./RequestContract";

export class Request implements RequestContract {
    public uri: string
    public method: string
    public query: string = ""

    protected constructor(newMethod: string, newUri: string) {
        this.method = newMethod;
        this.uri = newUri;
    }

    public pushQuery(key: string, value: unknown): this {
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

    public static get(uri: string): RequestContract {
        return new Request("get", uri)
    }
}