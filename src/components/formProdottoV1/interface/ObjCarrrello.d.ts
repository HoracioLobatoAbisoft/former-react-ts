import { DateConsegna } from "./tableDate";

export interface ObjCarrello {
    idUt: string | undefined,
    idPrev: string | undefined;
    nome: string | null;
    note: string | null;
    qta: number | null;
    img: string | undefined |SvgImage ;
    svgImg: boolean | undefined;
    prodotto: string | undefined;
    orientamiento: string | false | undefined;
    idOrientamiento: number;
    suporto: string;
    stampa: string;
    colli: number | undefined;
    peso: number | undefined;
    prezzo: number | undefined;
    stampaOPZ: string[];
    descrizione: string | undefined;
    dimencioni: string | undefined;
    nomeUrl: string | undefined;
    scadenza: DateConsegna | undefined;
    code: string;
    idListinoBase?: number | undefined;
    _Sconto?: number | undefined;
    _CodiceCouponApplicato?: string | undefined;
    idCoupon?: number | undefined;
    idPromo?: number | undefined;
    showFogli: boolean | undefined;
    fogli: string;
    labelFogli: string
    pdfTemplate: string | undefined;
    altezza: number | null  | undefined;
    base: number | null  | undefined;
    produndita: number | null  | undefined;
    idReparto: number | undefined;
    IdFormProd: string | number | undefined;
    IdTipoCarta: string | number | undefined;
    IdColoreStampa: string | number | undefined;
}