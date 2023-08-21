export interface ResponseGetPromo {
    data: DataGetPromo[];
    message: string;
    status: number;
}

export interface DataGetPromo {
    nome: string;
    url: string;
    imgRif?: string;
    categoria: string;//
    formato: string;//
    carta: string;//
    colori: string;//
    descripcion: string;//
    porcentajePromo: number;//
    fechaValidaPromo: string;//
    recensioni: number;
    voto: number;
    stars: string;
    showPrezziRiv: Boolean;
    prezzo1RivStr: string;
    prezzo1Str: string;
    qta1: number;
    unitaMisura: string;
    prezzo1RivPStr: string;
    prezzo1PStr: string;
    prezzo2RivStr: string;
    prezzo2Str: string;
    qta2: number;
    prezzo2RivPStr: string;
    prezzo2PStr: string;
    prezzo3RivStr: string;
    prezzo3Str: string;
    qta3: number;
    prezzo3RivPStr: string;
    prezzo3PStr: string;
}
