export interface ResponseGetCaricaCorriere {
    data: DataGetCaricaCorriere[];
    message: string;
    status: number;
}

export interface DataGetCaricaCorriere {
    idCorriere:number;
    descrizione: string;
    label: string;
}
