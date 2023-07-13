export interface ResponseFormatDinamico {
    data: DataFormatoDinamico;
    message: string;
    status: number;
}

export interface DataFormatoDinamico {
    anima: number;
    categoria: string;
    descrizione: string;
    idCatFustella: number;
    imgRif: string;
    isChanged: boolean;
    larghezzaMax: number;
    nomeInUrl: string;
    tipoForma: number;
}
