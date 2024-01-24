export interface ResponsePostTipoRetro {
    data: DataPostTipoRetro;
    message: string;
    status: number;
}

export interface DataPostTipoRetro {
    hrefRetroHRef: string ;
    hrefRetroVisible: boolean;
    lblRetroText:  string;
    lblRetroVisible: boolean;
    uploaderRVisible: boolean;
}
