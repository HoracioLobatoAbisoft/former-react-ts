import { DataGetAplicaCouponSconto } from "./CouponSconto";

export interface ResponseGetTipoPagamento {
    data: DataGetTipoPagamenti[];
    message: string;
    status: number;
}

export interface DataGetTipoPagamenti {
    descrizione: string;
    imgRif: string;
    note: null | string;
    titulo: string;
    idTipoPagamento: number;
    periodoPagamento: number;
}

export interface DataLocalPagamento {
    tipoPagamento?: DataGetTipoPagamenti;
    dataSconto: DataGetAplicaCouponSconto | undefined
}