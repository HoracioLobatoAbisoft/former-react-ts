export interface ResponseGetCaricaRandomListino {
    data: DataCaricaRandom;
    message: string;
    status: number;
}


export interface DataCaricaRandom {
    nome: string;
    getImgFormato: string;
    url: string;
    descrSitoFormatted: string;
}