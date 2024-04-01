import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./consts/ApiConsts";

export const api: AxiosInstance = axios.create({
    baseURL: BASE_URL
})