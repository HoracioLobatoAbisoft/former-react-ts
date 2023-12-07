export interface IFormIndirizzo {
    idut: number;
    indirizzo: string;
    referimento: string;
    destinatario: string;
    telefono: string;
    idNazione: number;
    idCap: number;
    cap?: string | null;
    localitaCap?: string | null;
}

export interface ResponsePostIndirizzo {
    data: boolean;
    message: string;
    status: number;
}