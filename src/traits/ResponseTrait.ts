export class ResponseTrait {
    static getResponseData(response): {[key: string]: any} | any[] {
        if (!response?.data) {
            return response;
        }

        if (response?.data) {
            return this.getResponseData(response.data);
        }
    }

    static isEmptyResponse(responseData): boolean {
        return responseData.length === 0;
    }
}
