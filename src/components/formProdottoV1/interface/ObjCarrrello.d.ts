export interface ObjCarrello {
    idUt: string | undefined,
    idPrev: string | undefined;
    nome: string | null;
    note: string | null;
    qta: number | null;
    img: string | undefined;
    prodotto: string;
    orientamiento: string;
    suporto: string;
    stampa: string;
    colli: number | undefined;
    peso: number | undefined;
    prezzo: number | undefined;
    stampaOPZ: string[];
    descrizione:string | undefined;
    dimencioni:string;
}