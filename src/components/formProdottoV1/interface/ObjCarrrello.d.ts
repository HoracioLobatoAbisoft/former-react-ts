import { OptionsSelect } from "../../formProdotto/interfaces/prodotto";
import { DateConsegna } from "./tableDate";

export interface ObjCarrello {
    idUt: string | undefined | number,
    idPrev: string | undefined;
    nome: string | null;
    note: string | null;
    qta?: number | null | string ;
    img: string | undefined  ;
    svgImg: SvgImage | undefined;
    prodotto: string | undefined;
    orientamiento: string | bool | undefined;
    idOrientamiento?: number | undefined | null |strin; 
    suporto?: string ;
    stampa?: string;
    colli: number | undefined;
    peso: number | undefined;
    prezzo: number | undefined;
    stampaOPZ: string[];
    _stampaOpzId: number[]
    descrizione: string | undefined;
    dimencioni: string | undefined;
    nomeUrl: string | undefined;
    scadenza: DateConsegna | undefined;
    code: string | undefined;
    idListinoBase?: number | undefined;
    _Sconto?: number | undefined;
    _CodiceCouponApplicato?: string | undefined;
    idCoupon?: number | undefined;
    idPromo?: number | undefined;
    showFogli: boolean | undefined;
    fogli?: string;
    labelFogli?: string
    pdfTemplate: string | undefined;
    altezza: number  ;
    base: number ;
    produndita: number  ;
    idReparto: number | undefined;
    IdFormProd: string | number | undefined;
    IdTipoCarta: string | number | undefined;
    IdColoreStampa: string | number | undefined;
    promo:boolean;
    percentualePromo?:number |string;
    idTipoFustella?:number;
}