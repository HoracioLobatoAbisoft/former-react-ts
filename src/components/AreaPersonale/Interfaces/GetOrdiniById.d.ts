import { ListLavori } from "./OrdiniIntarface";

export interface ResponseGetOrdiniById {
    data: DataGetOrdiniById;
    message: string;
    status: string;
}

export interface DataGetOrdiniById {
    banca: string;
    cabecera: null;
    colorDate: string;
    coloreStatoHtml: string;
    corriereStr: string;
    count: number;
    cuerpo: string;
    dataInserimentoStr: string;
    dataOrdineClasse: string;
    dataOrdineLabel: string;
    dateConsegna: string;
    giornoStr: string;
    iban: string;
    iconaCorriere: string;
    iconaCorriereAlt: string;
    idConsegna: number;
    idConsegnaView: string;
    idCouponUtilizzato: number;
    idStatoConsegna: number;
    importoConsegnaStr: string;
    importoTotIvaStr: string;
    importoTotNettoStr: string;
    importoTotOrdiniNettoOriginaleStr: string;
    importoTotStr: string;
    importoTotaleSconti: number;
    importoTotaleScontiStr: string;
    indirizzoStr: string;
    inseritoStr: string;
    listLavori: ListLavori[];
    modificabile: boolean;
    numeroColliStr: string;
    pagamentoStr: string;
    pesoKG: number;
    showEffettuaPagamento: boolean;
    showEliminaOrdine: boolean;
    showTraciabile: boolean;
    statoStr: string;
    tracciabile: boolean;
}


