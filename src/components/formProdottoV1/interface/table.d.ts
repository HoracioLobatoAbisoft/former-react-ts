export interface RootObject {
    data: TablePrezzi[];
    message: string;
    status: string;
}

export interface TablePrezzi {
    idMacchinarioStampa: number;
    prezzoConsigliatoPubbl: number;
    prezzoPubbl: number;
    prezzoRiv: number;
    richiestaCalcoloPrezzo: RichiestaCalcoloPrezzo;
}

export interface RichiestaCalcoloPrezzo {
    anomaliaPrezzoCalcolato: boolean;
    qtaDaInserireObbligatoriamenteInElenco: boolean;
    qtaDaUsareNelCalcoloLavorazioni: number;
    qtaRichiesta: number;
}