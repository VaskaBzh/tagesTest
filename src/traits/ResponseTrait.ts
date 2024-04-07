import { ResponseType } from "@/Types/ResponseType.ts";
import { AxiosResponse } from "axios";

export class ResponseTrait {
    static getResponseData(response: AxiosResponse<string, unknown>): ResponseType  {
        if (!response?.data) {
            return response as ResponseType;
        }

        if (response?.data) {
            return this.getResponseData(response.data as AxiosResponse<string, unknown>);
        }

        return response;
    }

    static isEmptyResponse(responseData: ResponseType): boolean {
        return responseData.length === 0;
    }
}
