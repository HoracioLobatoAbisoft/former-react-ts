import applicationConnect from "../../../api";
import { ResponseFormato } from "../interface/Formato";
import { IshowOrientamiento } from "../interface/IshowOrientamiento";
import { ColoreStampa } from "../interface/coloreStampa";
import { Opzioni } from "../interface/opzioni";
import { PrezzoValue, ResponsePrezzoTabella } from "../interface/showColumPrezzo";
import { IShowOpzioni } from "../interface/showOpzioni";
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
export const httpGetColoreStampa = async (idPrev: number, idFormProd: number, idTipoCarta: number) => {
  try {
    const result = await applicationConnect.get<ResponseApi<ColoreStampa[]>>(BASE_URL + "GetColoreStampa", {
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta: idTipoCarta,
      },
    });
    //console.info("httpGetColoreStampa", idPrev, idFormProd);
    //debugger
    return result.data;
  } catch (error) {
    throw new Error("");
  }
};
export const httpGetOpzioni = async (idPrev: number, idFormProd: number,idTipoCarta:number,idColoreStampa:number,base:number,prfundita:number, altezza:number) => {
  try {
    const result = await applicationConnect.get<ResponseApi<Opzioni[]>>(BASE_URL + "GetOpzioni", {
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta:idTipoCarta,
        IdColoreStampa:idColoreStampa,
        bases:base,
        profundita:prfundita,
        altezza:altezza,
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
    const result = await applicationConnect.get<ResponseApi<TableDate>>(BASE_URL + "GetTableDate", {
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
  // StampaCaldo:number,
  // Plastificazione:number,
  IVA:number,
  idUt:number,
  valuesStampaCaldoOpz:{}
  ) => {
    console.log("Api: ",valuesStampaCaldoOpz)
  try {
    const result = await applicationConnect.post<ResponseApi<TablePrezzi[]>>("Prodotto", {
        idPrev: idPrev,
        idTipoCarta: idTipoCarta,
        idColoreStampa:idColoreStampa,
        idFormProd: idFormProd,
        Base:Base,
        Produndita:Produndita,
        Altezza: Altezza,
        Quantita:Quantita,
        // StampaCaldo:StampaCaldo,
        // Plastificazione:Plastificazione,
        IVA:IVA,
        idUser:idUt,
        stampaOpz:valuesStampaCaldoOpz
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

export const httpGetShowOrientmiento =async (idPrev: number, idFormProd: number,idTipoCarta:number,idColoreStampa:number) =>{
  try {
    const result = await applicationConnect.get<IshowOrientamiento>("Packagin/GetShowOrientamento",{
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta:idTipoCarta,
        IdColoreStampa:idColoreStampa
      },
    });
    console.warn('httpGetShowOrientmiento',result.data)
    return result.data
  } catch (error) {
    console.error('httpGetShowOrientmiento',error)
  }
}

export const httpGetShowBloccoMisure =async (idPrev: number, idFormProd: number,idTipoCarta:number,idColoreStampa:number) => {
  try {
    const result = await applicationConnect.get<IshowOrientamiento>("Packagin/GetShowBloccoMisure",{
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta:idTipoCarta,
        IdColoreStampa:idColoreStampa
      },
    });
    console.warn('httpGetShowOrientmiento',result.data)
    return result.data
  } catch (error) {
    console.error('httpGetShowOrientmiento',error)
  }
}

export const httpGetShowQtaCustom =async (idPrev: number, idFormProd: number,idTipoCarta:number,idColoreStampa:number) => {
  try {
    const result = await applicationConnect.get<IshowOrientamiento>("Packagin/GetShowQtaCustom",{
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta:idTipoCarta,
        IdColoreStampa:idColoreStampa
      },
    });
    console.warn('httpGetShowOrientmiento',result.data)
    return result.data
  } catch (error) {
    console.error('httpGetShowOrientmiento',error)
  }
}

export const httpGetShowtxtQtaCustom =async (idPrev: number, idFormProd: number,idTipoCarta:number,idColoreStampa:number) => {
  try {
    const result = await applicationConnect.get<IshowOrientamiento>("Packagin/GetShowtxtQtaCustom",{
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta:idTipoCarta,
        IdColoreStampa:idColoreStampa
      },
    });
    //console.warn('httpGetShowOrientmiento',result.data)
    return result.data
  } catch (error) {
    console.error('httpGetShowOrientmiento',error)
  }
}

export const httpGetShowColumTable =async (idPrev: number) => {
  try {
    const result = await applicationConnect.get<ResponsePrezzoTabella>("Packagin/GetShowColumTabellaPrezzi",{
      params: {
        IdPrev: idPrev,
      },
    });
    //console.warn('httpGetShowOrientmiento',result.data)
    return result.data
  } catch (error) {
    console.error('httpGetShowOrientmiento',error)
  }
}

export const httpGetFormatoArray = async (idPrev: number) => {
  try {
    const result = await applicationConnect.get<ResponseFormato>("Packagin/GetFormato",{
      params: {
        IdPrev: idPrev,
      },
    });
    //console.warn('httpGetFormatoArray',result.data)
    return result.data
  } catch (error) {
    throw new Error("");
  }
}

export const httpGetShowOpzioni = async (idPrev: number) => {
  try {
    const result = await applicationConnect.get<IShowOpzioni>("Packagin/GetShowOpzioni",{
      params: {
        IdPrev: idPrev,
      },
    });
    //console.warn('httpGetFormatoArray',result.data)
    return result.data
  } catch (error) {
    throw new Error("");
  }
}