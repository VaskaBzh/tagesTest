import { ResponseType } from "../types/ResponseType";
import axios, { AxiosInstance } from "axios";
import { Request } from "../request/Request";


export abstract class BaseClient {
    protected abstract baseUrl(): string

    protected get baseRequest(): AxiosInstance {
        return axios.create({
            baseURL: this.baseUrl()
        })
    }

    protected async send(Request: typeof Request): Promise<ResponseType> {
        // @ts-expect-error
        return this.baseRequest[Request.method](Request.uri);
    }
}