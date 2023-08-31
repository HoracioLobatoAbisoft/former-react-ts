export interface ReponseGetOridini {
    data: DataGetOrdini;
    message: string;
    status: number;
}

export interface DataGetOrdini {
    ordineList: OrdineList[];
    paginationList: number[];
}

export interface OrdineList {
    banca: string;
    cabecera: null;
    colorDate: string;
    coloreStatoHtml: string;
    corriereStr: string;
    count: number;
    cuerpo: null;
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
    numeroColliStr: string;
    pagamentoStr: string;
    pesoKG: number;
    showEffettuaPagamento: boolean;
    showEliminaOrdine: boolean;
    showTraciabile: boolean;
    statoStr: string;
    tracciabile: boolean;
    idStatoConsegna:number;
    modificabile:boolean;
}


export interface ListLavori {
    anteprimaWeb: string;
    boxImgRif: string;
    boxLavorazioni: string[];
    boxTitolo: string;
    collapseInterno: null;
    colliStr: string;
    colorCoupon: string;
    coloreStatoHTMLO: string;
    coloriStampaStr: string;
    dimensioniStr: string;
    fogliLabel: string;
    idCoupon: number;
    idOrdineWeb: number;
    ifCoupon: number;
    ifFogli: boolean;
    ifNote: number;
    ifOpzioni: number;
    ifOrientamento: number;
    ifSupporto: number;
    importoNettoStr: string;
    importoTotaleScontiStrO: string;
    nFogliVisStr: string;
    nOrdineStr: string;
    nomeLavoro: string;
    nomeProdotto: string;
    noteOrd: string;
    omaggio: number;
    orientamentoSelezionatoStr: string;
    pathTemplate: string;
    pesoStr: string;
    preventizioneIdReparto: number;
    promo: number;
    qtaStr: string;
    statoStrO: string;
    supportoStr: string;
    title: string;
    iconaStato:string;
    stato:number;
    showSVG:boolean;
    labelCopertina:string;
}

export interface ReponseDeleteOridine {
    data: DataGetOrdini;
    message: string;
    status: number;
}

export interface ReponseDeleteLavoro {
    data: DataGetOrdini;
    message: string;
    status: number;
}