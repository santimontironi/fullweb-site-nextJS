import axios from "axios";

const URL_API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

export const sendMessageAxios = async (data) => {
    return URL_API.post("/api", data);
}