export interface FormEditData {
    idLavoro: number | null;
    note: string | null;
    nomeLavoro: string | null;
}

export interface SectionEditable {
    name: string;
    open: boolean;
}

export interface ResponsePutModificaNoteNome {
    message: string,
    data: boolean,
    status: number,
}