export interface ResponseGetIndirizzo {
    data: DataGetIndirizzo[];
    message: string;
    status: number;
}

export interface DataGetIndirizzo {
    destinatario: string;
    idIndirizzo: number;
    indirisso: string;
    localitaStr: string;
    nazioneStr: string;
    nome: string;
    predefinito: boolean;
    riassunto: string;
    telefono: string;
    cap:string;
}
