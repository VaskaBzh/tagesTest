import { ResponseTrait } from "@/traits/ResponseTrait";
import { ResponseType } from "@/Types/ResponseType";
import { SecureResponseType } from "@/Types/SecureResponseType";

export async function securitySend(request: () => Promise<ResponseType>): Promise<SecureResponseType> {
    try {
        const response: ResponseType = await request();

        const responseData: ResponseType = ResponseTrait.getResponseData(response as ResponseType);
        if (ResponseTrait.isEmptyResponse(responseData)) {
            console.error('Empty response');

            return response;
        }

        return response;
    } catch (error) {
        throw new Error(`Error with: ${error}`)

        return null;
    }
}