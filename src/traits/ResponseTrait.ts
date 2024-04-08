import { ResponseType } from "@/Types/ResponseType";

export class ResponseTrait {
    static getResponseData(response: ResponseType): ResponseType  {
        if (!response?.data) {
            return response as ResponseType;
        }

        if (response?.data) {
            return this.getResponseData(response.data as ResponseType);
        }

        return response;
    }

    static isEmptyResponse(responseData: ResponseType): boolean {
        return responseData.length === 0;
    }
}
