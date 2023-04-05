import axios, { AxiosInstance } from "axios";

class Http {
    instance: AxiosInstance
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&trackity_id=cca3c480-6967-8e46-2521-43ed98bd7472&category=915&page=2&urlKey=thoi-trang-nam',
            timeout: 10000
        })
    }
}

const http = new Http().instance;
export default http;