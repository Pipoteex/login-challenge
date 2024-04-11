import axios from "axios";

import { config } from "../config/config";

const api = axios.create({
    baseURL: config.baseURL,
});

api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common.Accept = "application/json";

export const setAuthHeader = (token: string) => {
    api.defaults.headers.Authorization = `Bearer ${token}`;
};

export const removeAuthHeader = () => {
    delete api.defaults.headers.Authorization;
};

export { api };
