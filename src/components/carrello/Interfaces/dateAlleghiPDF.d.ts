export interface ResponseGetAlleghiPDF {
    data: Data;
    message: string;
    status: number;
}

export interface DataGetAlleghiPDF {
    entro: string;
    ore: string;
}

export interface DateEntrega {
    consegna:Date | undefined,
    corriere:Date | undefined
}