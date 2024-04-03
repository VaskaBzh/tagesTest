import { AxiosResponse } from "axios";

export type ResponseType = Promise<AxiosResponse<any, any>>

export type NullableResponseType = ResponseType | null