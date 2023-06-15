import axios from "axios";
import { endpoints } from "./endpoints"

export const searchRequest = async (search: string) => {
    const url = `${endpoints.search}?q=${search}`;
    return axios.get(url).then((response) => {
        return response.data;   
    })
}

export const showRequest = async (showId: string) => {
    const url = `${endpoints.show}${showId}`;

    return axios.get(url).then((response) => {
        return response.data;
    })
}