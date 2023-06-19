export interface ResponseDisabledProfundita {
    data: DataDisablesProfundita;
    message: string;
    status: number;
}

export interface DataDisablesProfundita {
    disabled: boolean;
    txt_Profundita: number;
}
