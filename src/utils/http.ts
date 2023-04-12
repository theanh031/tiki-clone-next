import axios, { AxiosInstance } from "axios";

class Http {
    instance: AxiosInstance
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://tiki.vn/api/personalish/v1/blocks',
            timeout: 0,
        })
    }
}

const http = new Http().instance;
export default http;