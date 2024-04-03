import { ResponseType } from "../../types/ResponseType";

export interface BaseClientContract {
    uri: string,
    method: string
    setMethod(newMethodValue: string): BaseClientContract
    setUri(newUriValue: string): BaseClientContract
    pushQuery(query: { [key: string] : string }): boolean
    send(): Promise<ResponseType>
}