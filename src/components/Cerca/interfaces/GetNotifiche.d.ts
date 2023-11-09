export interface ResponseGetNotifiche {
    code: number;
    data: DataGetNotfiche;
    status: string;
}

export interface DataGetNotfiche {
    count: number;
    lavoriInvioFile: LavoriInvioFile;
    listinoPDF: LavoriInvioFile;
    ordiniAstesaPagamento: LavoriInvioFile;
}

export interface LavoriInvioFile {
    registers: Register[];
    title: string;
}

export interface Register {
    imageUrl: string;
    text: string;
    textImporto: string;
}
