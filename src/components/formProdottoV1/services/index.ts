import applicationConnect from "../../../api";
import { ColoreStampa } from "../interface/coloreStampa";
import { Opzioni } from "../interface/opzioni";
import { OptionsSelectS, StaCalOpz } from "../interface/stampaCaldo";
import { SvgImage } from "../interface/svgImage";
import { TablePrezzi } from "../interface/table";
import { TableDate } from "../interface/tableDate";
import { ResponseApi, TipoDiCarta } from "../interface/tipoCarta";

const BASE_URL = "/Packagin/";

export const httpGetTipoCarta = async (idPrev: number, idFormProd: number) => {
  try {
    const result = await applicationConnect.get<ResponseApi<TipoDiCarta[]>>(BASE_URL + "GetTipoCarta", {
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
      },
    });
    //debugger
    return result.data;
  } catch (error) {
    throw new Error("");
  }
};
export const httpGetColoreStampa = async (idPrev: number, idFormProd: number) => {
  try {
    const result = await applicationConnect.get<ResponseApi<ColoreStampa[]>>(BASE_URL + "GetColoreStampa", {
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
      },
    });
    //debugger
    return result.data;
  } catch (error) {
    throw new Error("");
  }
};
export const httpGetOpzioni = async (idPrev: number, idFormProd: number,idTipoCarta:number,idColoreStampa:number) => {
  try {
    const result = await applicationConnect.get<ResponseApi<Opzioni[]>>(BASE_URL + "GetOpzioni", {
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta:idTipoCarta,
        IdColoreStampa:idColoreStampa
      },
    });
    //debugger
    return result.data;
  } catch (error) {
    throw new Error("");
  }
};

export const httpGetTableDate = async (idUt:number,idPrev: number, idFormProd: number,idTipoCarta:number,idColoreStampa:number) => {
  try {
    const result = await applicationConnect.get<ResponseApi<TableDate[]>>(BASE_URL + "GetTableDate", {
      params: {
        idUt: idUt,
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta:idTipoCarta,
        IdColoreStampa:idColoreStampa
      },
    });
    //debugger
    return result.data;
  } catch (error) {
    throw new Error("");
  }
};
export const httpGetStampaCaldo = async (idPrev: number, idFormProd: number,idTipoCarta:number,idColoreStampa:number) => {
  try {
    const result = await applicationConnect.get<ResponseApi<StaCalOpz[]>>(BASE_URL + "GetStamCalPlaz", {
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta:idTipoCarta,
        IdColoreStampa:idColoreStampa
      },
    });
    //debugger
    return result.data;
  } catch (error) {
    throw new Error("");
  }
};
export const httpGetTablePrezzi = async (
  idPrev: number,
  idTipoCarta: number,
  idColoreStampa:number,
  idFormProd: number,
  Base:number,
  Produndita:number,
  Altezza: number,
  Quantita:number,
  StampaCaldo:number,
  Plastificazione:number,
  IVA:number
  ) => {
  try {
    const result = await applicationConnect.get<ResponseApi<TablePrezzi[]>>("Prodotto", {
      params: {
        idPrev: idPrev,
        idTipoCarta: idTipoCarta,
        idColoreStampa:idColoreStampa,
        idFormProd: idFormProd,
        Base:Base,
        Produndita:Produndita,
        Altezza: Altezza,
        Quantita:Quantita,
        StampaCaldo:StampaCaldo,
        Plastificazione:Plastificazione,
        IVA:IVA
      },
    });

    return result.data;
  } catch (error) {
    throw new Error("");
  }
};
export const getSvgImageService = async (
  Base: number,
  Profondita: number,
  Altezza:number,
  idPrev: number,
  ) => {
  try {
    const result = await applicationConnect.get<ResponseApi<SvgImage>>("Prodotto/SvgGraphic", {
      params: {
        idPrev: idPrev,
        Base: Base,
        Profondita: Profondita,
        Altezza:Altezza
        
      },
    });
    return result.data;
  } catch (error) {
    throw new Error("");
  }
};

