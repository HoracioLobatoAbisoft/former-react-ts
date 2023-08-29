export interface ResponseGetDescrizioniDinamica {
    data: DataGetDescrizioniDinamica;
    message: string;
    status: number;
}

export interface DataGetDescrizioniDinamica {
    descrizioneEstesa: string;
    descrizioneEstesaEx: string;
    nombe: string;
    tipoCarta: string;
}
