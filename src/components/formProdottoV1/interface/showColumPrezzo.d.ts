export interface ResponsePrezzoTabella {
    data: PrezzoValue;
    message: string;
    status: number;
}

export interface PrezzoValue {
    prezzoFazt: number;
    prezzoNorm: number;
    prezzoSlow: number;
}
