export interface ResponseGetCalcolaTuto {
    data: DataGetCalcolaTuto;
    message: string;
    status: number;
}

export interface DataGetCalcolaTuto {
    colli: number;
    orientamentoScelto: number;
    peso: number;
    prezzoCalcolatoNetto: number;
    prezzoPubblico: number;
    graficaPerFacciata:number;
    pesoStr:number;
    costo:number;
    boxLavoracioni:string[];
    qta:number;
    promoPercentuale:number;
    dataFineValidita:Date;
}
