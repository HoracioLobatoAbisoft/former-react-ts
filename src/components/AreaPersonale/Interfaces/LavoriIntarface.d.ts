export interface ReponseGetLavori {
    data: DataGetLavori;
    message: string;
    status: number;
}

export interface DataGetLavori {
    list: LavoriList[];
    paginatedList: number[];
}




export interface LavoriList {
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
    idLavoreWeb: number;
    ifCoupon: number;
    ifFogli: boolean;
    ifNote: number;
    ifOpzioni: number;
    ifOrientamento: number;
    ifSupporto: number;
    importoNettoStr: string;
    importoTotaleScontiStrO: string;
    nFogliVisStr: string;
    nLavoreStr: string;
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
    idOrdineWeb: number;
}


export interface ReponseDeleteLavoro {
    data: DataGetLavori;
    message: string;
    status: number;
}