export interface RootObject {
    data: Opzioni[];
    message: string;
    status: number;
}

export interface Opzioni {
    descrizione: string;
    descrizioneEstesa: string;
    idLavoro: number;
    imgRif:string;
    catLav:{
        idCatLav: number,
        descrizione: string,
    }
}