import { ObjCarrello } from "../../formProdottoV1/interface/ObjCarrrello";

export interface ResponseGetAplicaCouponSconto {
    data: DataGetAplicaCouponSconto;
    message: string;
    status: number;
}

export interface DataGetAplicaCouponSconto {
    message: string;
    showInput:boolean;
    importoFisso:number;
    newOrdines: ObjCarrello[];
}



