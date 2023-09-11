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
    idReparto:number;
    showTemplate:boolean;
    showTemplate2D:boolean;
    showTemplate3D:boolean;
}
