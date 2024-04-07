import { QueryParamType } from "../types/QueryParamType";

const ENTRIES_KEY_INDEX: 0 = 0;
const ENTRIES_VALUE_INDEX: 1 = 1;

export class Request {
    private uri: string = ""
    private method: string = ""

    protected setMethod(newMethodValue: string = "get"): this {
        this.method = newMethodValue;

        return this;
    }

    protected setUri(newUriValue: string): this {
        this.uri = newUriValue;

        return this;
    }

    protected pushQuery(query: { [key: string] : QueryParamType }): boolean {
        const queryEntries: [string, QueryParamType][] = Object.entries(query);

        const filteredQueries: [string, QueryParamType][] = queryEntries.filter(
            (queryElement: [string, QueryParamType]): boolean => Boolean(queryElement[ENTRIES_VALUE_INDEX])
        )
        if (filteredQueries.length <= 0) {
            return false;
        }

        this.uri += "?";

        this.uri += filteredQueries
            .map((queryElement: [string, QueryParamType]): string => `${queryElement[ENTRIES_KEY_INDEX]}=${queryElement[ENTRIES_VALUE_INDEX]}`)
            .join("&");

        return true;
    }
}