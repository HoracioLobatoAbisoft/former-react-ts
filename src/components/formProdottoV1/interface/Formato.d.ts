export interface ResponseFormato {
    data: IFormato[];
    message: string;
    status: number;
}

export interface IFormato {
    areaCmQuadrati: number;
    descrizioneEstesa: string;
    descrizioneHTML: string;
    dimensioniCartaStr: string;
    fc: Fc;
    formato: string;
    formatoCartaStr: string;
    idCatFormatoProdotto: number;
    idFormCarta: number;
    idFormProd: number;
    imgRif: string;
    isChanged: boolean;
    isLastra: number;
    isRotolo: number;
    larghezza: number;
    larghezzaCm: number;
    lunghezza: number;
    lunghezzaCm: number;
    nomeAlbero: string;
    nomeAlberoRif: string;
    nomeInUrl: string;
    numfacc: number;
    ordinamentoByListinoBase: number;
    orientabile: number;
    orientamento: number;
    orientamentoStr: string;
    pdfTemplate: string;
    pdfTemplate3d: string;
    prodottoFinito: boolean;
    sigla: string;
}

export interface Fc {
    altezza: number;
    altezzaMM: number;
    area: number;
    formatoCarta: string;
    idFormCarta: number;
    isChanged: boolean;
    larghezza: number;
    larghezzaMM: number;
    latoCorto: number;
    latoCortoMM: number;
    latoLungo: number;
    latoLungoMM: number;
    tolleranzaDifetto: number;
    tolleranzaEccesso: number;
}

