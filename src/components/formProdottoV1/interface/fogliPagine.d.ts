export interface RootObject {
    data: Data;
    message: string;
    status: number;
}

export interface FofliPagine {
    copertina: Copertina;
    data: Datum[];
    fogliLabel: string;
    getEtichettaMisure: string;
    showCopertina: number;
    showFogliPagine: boolean;
    showProfundita: boolean;
    sotoblocco: Sotoblocco;
    tipoCartaText: string;
    misueres: Misueres;
    formatoText:string;
}

export interface Datum {
    valoreRif: number;
    voceTxt: string;
}
export interface Copertina {
    dezcrzzione: string;
    imgRif: string;
    showCopertina: number;
    textCopertina: string;
    tipologia: string;
}
export interface Sotoblocco {
    dezcrzzione: string;
    imgRif: string;
    showSotoblocco: number;
    textSottoBlocco: string;
    tipologia: string;
}
export interface Misueres {
    altezzaMisure: string;
    baseMisure: string;
    profunditaMisure: string;
}

export interface ArraySotoblocco {
    descrizioneEstesa: string,
    idTipoCartaD: number,
    imgRif: string,
    tipologia: string,
    text: string
}