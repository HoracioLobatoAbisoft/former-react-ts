export interface ResponseGetAggiornaReview {
    data: DataGetAggiornaReview[];
    message: string;
    status: number;
}

export interface DataGetAggiornaReview {
    difetti: string;
    nomeUt: string;
    pregi: string;
    quando: string;
    stars: string;
    prodotto:string;
}

