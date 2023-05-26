export interface RootObject {
    data: ColoreStampa[];
    message: string;
    status: number;
}

export interface ColoreStampa {
    descrizione: string;
    fr: boolean;
    idColoreStampa: number;
    imgrif: string;
    isChanged: boolean;
    nLastre: number;
    nomeInUrl: string;
    sigla: string;
}