import { AxiosResponse } from "axios";

export type ResponseType = Promise<AxiosResponse<string, unknown>>

export type NullableResponseType = ResponseType | null