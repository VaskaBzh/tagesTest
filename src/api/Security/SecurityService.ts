import { ResponseTrait } from "../../traits/ResponseTrait";
import { NullableResponseType, ResponseType } from "../types/ResponseType";
import { AxiosResponse } from "axios";

export class SecurityService {
    public static async securitySend(request: () => Promise<ResponseType>): Promise<NullableResponseType> {
        try {
            const response: AxiosResponse<any, any> = await request();

            if (ResponseTrait.isEmptyResponse(response)) {
                throw new Error(`Empty response`)

                return null;
            }

            return response;
        } catch (error) {
            throw new Error(`Error with: ${error}`)

            return null;
        }
    }
}