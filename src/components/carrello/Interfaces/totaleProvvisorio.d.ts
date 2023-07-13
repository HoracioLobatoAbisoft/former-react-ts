export interface ReponseGetTotaleProvisorio {
    data: DataGetTotaleProvisorio;
    message: string;
    status: number;
}

export interface DataGetTotaleProvisorio {
    iva: number;
    pesoKG: number;
    pesoVolumentrico: number;
    prezzoTotaleOrdini: number;
    spedizioni: number;
    totaleOridini:number;
}

