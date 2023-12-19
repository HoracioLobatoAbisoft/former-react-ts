import { DataGetCaricaCorriere } from "./CaricaCorriere";
import { DataGetIndirizzo } from "./Indirizzo";

export interface ResponseGetCorriereSelezionata {
    data: DataGgetCorriereSelezionata;
    message: string;
    status: number;
}

export interface DataGgetCorriereSelezionata {
    corrDaUsare: CorrDaUsare;
    dateConsegna: DateConsegna;
    pnlTrace:boolean;
}

export interface CorrDaUsare {
    costo: number;
    descrizione: string;
    disattivo: number;
    disponibileOnline: boolean;
    ggConsegna: number;
    idCorriere: number;
    isChanged: boolean;
    kgLimite1: number;
    kgLimite2: number;
    kgLimite3: number;
    kgLimite4: number;
    kgLimite5: number;
    kgLimite6: number;
    kgLimite7: number;
    label: string;
    labelDataConsegna: string;
    metodoDiConsegna: MetodoDiConsegna;
    nomeBreve: string;
    nomePulito: string;
    pathTrack: string;
    percPortoAssegnato: number;
    prevedeAccorpamento: boolean;
    riassunto: string;
    tariffaLimite1: number;
    tariffaLimite2: number;
    tariffaLimite3: number;
    tariffaLimite4: number;
    tariffaLimite5: number;
    tariffaLimite6: number;
    tariffaLimite7: number;
    testoMail: string;
    tipoCorriere: number;
}

export interface MetodoDiConsegna {
    descrizione: string;
    idMetodoConsegna: number;
    label: string;
    onlyAutorized: boolean;
    urlDettaglio: string;
}

export interface DateConsegna {
    dataFast: Date;
    dataFastProduzione: Date;
    dataNormale: Date;
    dataNormaleProduzione: Date;
    dataSlow: Date;
    dataSlowProduzione: Date;
    giornoStrN: string,
    giornoIntN: string,
    meseN: string,
    giornoStrF: string,
    giornoIntF: string,
    meseF: string,
    giornoStrS: string,
    giornoIntS: string,
    meseS: string
    giornoStrNP: string
    giornoIntNP: string
    giornoStrFP: string,
    giornoIntFP: string,
    giornoStrSP: string,
    giornoIntSP: string
}

export interface IDataConsegna {
    dateProduzione?: Date,
    dateProduzioneStr?: String,
    date?: Date,
    dateStr?: String,
}

export interface ISegliConsegnaData{
    dateConsenga: IDataConsegna | undefined;
    dataIndirizzo: DataGetIndirizzo | undefined;
    dataCorriere:CorrDaUsare | undefined;
    pesoTotale: number | undefined;
    email:string | undefined;
}
