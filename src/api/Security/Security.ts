import { ResponseTrait } from "@/traits/ResponseTrait";
import { NullableResponseType, ResponseType } from "../types/ResponseType";

export async function securitySend(request: () => Promise<ResponseType>): Promise<NullableResponseType> {
    try {
        const response: ResponseType = await request();

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