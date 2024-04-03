import { BaseClientContract } from "./contracts/BaseClientContract";
import { api } from "../api.ts";
import { QueryParamType } from "../types/QueryParamType";
import { ResponseType } from "../types/ResponseType";

export class BaseClient implements BaseClientContract {
    uri: string = ""
    method: string = ""

    setMethod(newMethodValue: string = "get"): BaseClient {
        this.method = newMethodValue;

        return this;
    }

    setUri(newUriValue: string): BaseClient {
        this.uri = newUriValue;

        return this;
    }

    pushQuery(query: { [key: string] : QueryParamType }): boolean {
        const queryEntries: [string, QueryParamType][] = Object.entries(query);

        const ENTRIES_KEY_INDEX = 0;
        const ENTRIES_VALUE_INDEX = 1;

        if (
            queryEntries.length <= 0 ||
            queryEntries.filter(
                (queryElement: [string, QueryParamType]): boolean => queryElement[ENTRIES_VALUE_INDEX] !== undefined
            )
            .length <= 0
        ) {
            return false;
        }

        this.uri += "?";

        this.uri += queryEntries
            .map((queryElement: [string, QueryParamType]): string => `${queryElement[ENTRIES_KEY_INDEX]}=${queryElement[ENTRIES_VALUE_INDEX]}`)
            .join("&");

        return true;
    }

    async send(): Promise<ResponseType> {
        // @ts-ignore
        return await api[this.method](this.uri);
    }
}