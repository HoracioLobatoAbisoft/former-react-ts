export interface ResponseGetUtente {
    data: DataResponseGetUtente;
}

export interface DataResponseGetUtente {
    cap: string;
    cellulare: string;
    citta: string;
    codFisc: string;
    codiceSDI: string;
    cognome: string;
    corriere: Corriere;
    dataIns: Date;
    defaultCap: string;
    descrizione: string;
    email: string;
    fax: string;
    idPagamento: number;
    idRubricaInt: number;
    idUt: number;
    indirizzo: string;
    lastLoginStr: string;
    nome: string;
    nominativo: string;
    pIvaStr: string;
    pec: string;
    piva: string;
    ragSoc: string;
    tel: string;
    tipoUtStr: string;
    urlDettaglio: string;
    tipo:number;
    indirizoS:string;
    indirizoR:string;
    idIndirizzo:number;
}

export interface Corriere {
    descrizione: string;
    idMetodoConsegna: number;
    label: string;
    onlyAutorized: boolean;
    urlDettaglio: string;
}
