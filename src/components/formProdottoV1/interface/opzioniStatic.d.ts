export interface ResponseGetOpzioniStatic {
    data: DataGetOpzioniStatic[];
    message: string;
    status: number;
}

export interface DataGetOpzioniStatic {
    costoSingCopia: number;
    descrizione: string;
    descrizioneEstesa: string;
    formatoRiferimento: string;
    ggRealiz: number;
    grammiMax: number;
    grammiMin: number;
    idCatLav: number;
    idLavoro: number;
    idMacchinario: number;
    idMacchinario2: number;
    idTipoLav: number;
    imgRif: string;
    macchinario: string;
    premio: number;
    prezzo: number;
    pubblica: boolean;
    sePresenteCalcolaSuSoggetti: number;
    sigla: string;
    stato: number;
    suCommessa: boolean;
    suProdotto: boolean;
    tempoRif: number;
}
