export interface IGeneralSeriesData {
    id: number;
    name: string;
    premiered: string;
    ended?: string;
    genres: string[];
    status: string;
    rating?: number;
    image?: string;
}

export interface ISeriesData extends IGeneralSeriesData {
    summary: string;
}

export interface IErrorComponent {
    msg: string;
}