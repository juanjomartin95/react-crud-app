import axios from "axios";
import env from "@/environment.ts";

const client = axios.create({
    baseURL: `${env.baseApiUrl}`,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default client;