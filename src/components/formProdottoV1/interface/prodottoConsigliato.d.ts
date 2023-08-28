export interface ResponseGetProduttoConsigliato {
    data: DataGetProduttoConsigliato[];
    message: string;
    status: number;
}

export interface DataGetProduttoConsigliato {
    carta: string;
    categoria: string;
    colori: string;
    dataFineValidita: null;
    descrSito: string;
    existPromo: boolean;
    formato: string;
    getImgFormato: string;
    stars: string;
    url: string;
    recesioni:number;
    aggregateRatingStr:string;
}
