export interface DataOrdineStep5  {
    email: string | null | undefined;
    indirizzo: string | null | undefined;
    fecha: string | null | undefined;
    consega: string | null | undefined;
    pesokg: string | null | undefined; 
    corrie: string | null | undefined;
    corrieI: string | null | undefined;
    corrieD: string | null | undefined;
}

export const DataOrdineVoid:DataOrdineStep5  = {
    email: '',
    indirizzo: '',
    fecha: '',
    consega: '',
    pesokg: '' ,
    corrie: '',
    corrieI:'',
    corrieD: '',
}