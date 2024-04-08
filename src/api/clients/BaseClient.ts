import axios, { AxiosInstance } from "axios";
import { RequestContract } from "../request/RequestContract";
import { ResponseType } from "../types/ResponseType";


export abstract class BaseClient {
    protected abstract baseUrl(): string

    protected get baseRequest(): AxiosInstance {
        return axios.create({
            baseURL: this.baseUrl()
        })
    }

    protected async send(request: RequestContract): Promise<ResponseType> {
        return this.baseRequest[request.method](
            request.method === "get" ?
                request.uri + request.query :
                request.uri
        );
    }
}