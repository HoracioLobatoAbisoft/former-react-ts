export interface ResponseGetDetagglioLavoro {
    data: DataGetDetaglioLavoro;
    message: string;
    status: number;
}

export interface DataGetDetaglioLavoro {
    qta: number;
    coloreStatoHTML: string;
    statoStr: string;
    getImgFormato: string;
    prodotto: string;
    dimensioniStr: string;
    tipologia: string;
    coloriStampa: string;
    labelFogli: string;
    nFogliVis: number;
    elencoLavorazioni: ElencoLavorazioniDTO[];
    colliStr: string;
    pesoStr: string;
    importoNettoStr: string;
    idPromo: number;
    nomeLavoro: string;
    noAttachFile: number;
    fronteRetro: boolean;
    tipoRetro: FronteRetroDTO[];
    showPreventivo: boolean;
    annotazioni: string;
    idOrdineWeb: number;
    anteprimaWeb: string;
    fileDaInviare: boolean;
    sorgenteRetro: number;
    tipoRetroSelectedValue: number;
    tipoRetroEnabled: boolean;
    chkPreventivoChecked: boolean;
    chkPreventivoEnabled: boolean;
    txtNoteReadOnly: boolean;
    lnkEditNoteVisible: boolean;
    lnkEditNomeVisible: boolean;
    lnkSaveNoteVisible: boolean;
    uploaderRVisible: boolean;
    lnkCaricaVisible: boolean;
    lblRetroText: string;
    uploaderFVisible: boolean;
    lblRetroVisible: boolean;
    idOrdine: number;
    idOrdineInt: number;
    showLabelFogli: boolean;
    idConsegna: number;
    stato: number;
    hrefFronteHRef: string;
    hrefFronteTarget: string;
    hrefFronteInnerText: string;
    hrefFronteVisible: boolean;
    hrefRetroHRef: string;
    hrefRetroTarget: string;
    hrefRetroInnerText: string;
    hrefRetroVisible: boolean;
    templatePDF:string;
}

export interface ElencoLavorazioni {
    descrizione: string;
    idCatLav: number;
    idLavoro: number;
}

export interface TipoRetro {
    text: string;
    value: number;
}
