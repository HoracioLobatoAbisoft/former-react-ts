export interface ResponseGetTipoPagamento {
    data: DataGetTipoPagamenti[];
    message: string;
    status: number;
}

export interface DataGetTipoPagamenti {
    descrizione: string;
    imgRif: string;
    note: null;
    titulo: string;
    idTipoPagamento:number;
    periodoPagamento:number;
}
