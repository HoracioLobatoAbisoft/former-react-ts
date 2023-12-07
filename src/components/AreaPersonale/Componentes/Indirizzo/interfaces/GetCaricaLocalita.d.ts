export interface ResponseGetLocalita {
    data: DataGetLocalita[];
    message: string;
    status: number;
}

export interface DataGetLocalita {
    cap: number;
    comune: string;
    idCap: number;
    idProvinciaSel: number | null;
    provincia: string;
    regione: string;
    riassunto: string;
}

