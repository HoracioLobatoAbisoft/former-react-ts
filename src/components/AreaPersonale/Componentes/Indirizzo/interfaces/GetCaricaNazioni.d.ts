export interface ResponseGetNazioni {
    data: DataGetNazioni[];
    message: string;
    status: number;
}

export interface DataGetNazioni {
    code: string;
    idGruppo: number;
    idNazione: number;
    isChanged: boolean;
    nazione: string;
}
