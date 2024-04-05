export class ResponseTrait {
    static getResponseData(response: any): {[key: string]: any} | any[] | void  {
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
