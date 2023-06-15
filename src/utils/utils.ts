import { ISeriesData } from "types/types";

export const getShowLink = (id: number) => {
    return `/show/${id}`;
}

export const undefinedSeriesData: ISeriesData = {
    id: 0,
    name: "",
    premiered: "",
    genres: [],
    status: "",
    summary: "",
}