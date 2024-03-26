import { DataGetAggiornaReview } from "./AggiornaReview";
import { DataGetDescrizioniDinamica } from "./DescrizioneDinamica";
import { DataDimensioniStr } from "./DimensioneStr";
import { IFormato } from "./Formato";
import { DataGetResencioniP } from "./RecensioniP";
import { ColoreStampa } from "./coloreStampa";
import { DataDisablesProfundita } from "./disabledProfundita";
import { Opzioni } from "./opzioni";
import { DataGetProduttoConsigliato } from "./prodottoConsigliato";
import { PrezzoValue } from "./showColumPrezzo";
import { StaCalOpz } from "./stampaCaldo";
import { TableDate } from "./tableDate";
import { TipoDiCarta } from "./tipoCarta";

export interface ResponseGetDataAll{
    data: DataGetAll;
    message: string;
    status: number;
}
export interface DataGetAll{
    formatoProdotto:IFormato[];
    tipoCarta:TipoDiCarta[];
    coloreStampa:ColoreStampa[];
    opzioni:Opzioni[];
    listDateTable:TableDate;
    showQtaCustom:boolean;
    stampaCaldoPlatificacione:StaCalOpz[];
    dimensioniStr:DataDimensioniStr;
    disabledProfundita:DataDisablesProfundita;
    showOrientamento:boolean;
    showBloccoMisure:boolean;
    showOpzioni:number;
    showSVG:boolean;
    showColumTabellaPrezzi:PrezzoValue;
    showTabellaPrezzi:boolean;
}