import { ResponseTrait } from "@/traits/ResponseTrait.ts";
import { NullableResponseType, ResponseType } from "../types/ResponseType";
import { AxiosResponse } from "axios";

export async function securitySend(request: () => Promise<ResponseType>): Promise<NullableResponseType> {
    try {
        const response: AxiosResponse<string, unknown> = await request();

        if (ResponseTrait.isEmptyResponse(ResponseTrait.getResponseData(response))) {
            throw new Error(`Empty response`)

            return null;
        }

        return response;
    } catch (error) {
        throw new Error(`Error with: ${error}`)

        return null;
    }
}