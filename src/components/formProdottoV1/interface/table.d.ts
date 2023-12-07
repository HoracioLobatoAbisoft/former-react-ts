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
    prezzoPromo:number;
    richiestaCalcoloPrezzo: RichiestaCalcoloPrezzo;
    selezionato:boolean;
}
export interface SelectRow {
    conditional: boolean,
    value: number,
    quantity: number
}

export interface RichiestaCalcoloPrezzo {
    anomaliaPrezzoCalcolato: boolean;
    qtaDaInserireObbligatoriamenteInElenco: boolean;
    qtaDaUsareNelCalcoloLavorazioni: number;
    qtaRichiesta: number;
}