export interface RootObject {
    data: StaCalOpz[];
    message: string;
    status: number;
}

export interface StaCalOpz {
    descrizione: string;
    idCatLav: number;
    optionsSelect: OptionsSelectS[];
    tipoCaratteristicaB: number;
    tipoControlloB: number;
}

export interface OptionsSelectS {
    descrizione: string;
    descrizioneEstesa: string;
    idCatLav: number;
    idLavoro: number;
    idMacchinario: number;
    imgRif: string;
    macchinario: string;
    prezzo: number;
    sigla: string;
}
