export interface ResponseDimensioniStr {
    data: DataDimensioniStr;
    message: string;
    status: number;
}

export interface DataDimensioniStr {
    dimensioniStr: string;
    prodotto: string;
    idReparto:number;
    imgSelezionato:string;
    orientamiento:number;
    showTamplate:boolean;
}
