import { ObjCarrello } from "../../formProdottoV1/interface/ObjCarrrello";

export interface AquistaOraDTO {
    dataInserimento?: string ;
    dataPrevistaOriginale: string;
    emailNotificheCorriere: string;
    giorno: string;
    idCorriere: number;
    idIndirizzo: number;
    idPagam: number;
    idUt: number;
    importoNetto: number;
    numColli: number;
    peso: number;
    idConsegna?: number;
    periodoPagam: number;
    idIndirizzoUtn:number;
}

export interface DataPostAquistaOra {
    aquistaOraDTO: AquistaOraDTO;
    ordineDataDTO: ObjCarrello[];
}

export interface ResponsePostAquistaOra{
    message:string;
    status:number;
    data:boolean;
}