import applicationConnect from "../../../api";
import { DataAlertMassimo } from "../interface/AlertMassimo";
import { ResponseFormato } from "../interface/Formato";
import { IshowOrientamiento } from "../interface/IshowOrientamiento";
import { ResponseGetCalcolaTuto } from "../interface/calcolaTuto";
import { ColoreStampa } from "../interface/coloreStampa";
import { ResponseDisabledProfundita } from "../interface/disabledProfundita";
import { FofliPagine } from "../interface/fogliPagine";
import { ResponseFormatDinamico } from "../interface/formatoDinamico";
import { ResposeGetHelperDataProdotto } from "../interface/helpersDataProdotto";
import { Opzioni } from "../interface/opzioni";
import { PrezzoValue, ResponsePrezzoTabella } from "../interface/showColumPrezzo";
import { IShowOpzioni } from "../interface/showOpzioni";
import { showSvgReponse } from "../interface/showSvg";
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
export const httpGetOpzioni = async (idPrev: number, idFormProd: number, idTipoCarta: number, idColoreStampa: number, base: number, prfundita: number, altezza: number) => {

  console.log("dataHTtp", base, prfundita, altezza)

  try {
    const result = await applicationConnect.get<ResponseApi<Opzioni[]>>(BASE_URL + "GetOpzioni", {
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta: idTipoCarta,
        IdColoreStampa: idColoreStampa,
        bases: base,
        profundita: prfundita,
        altezza: altezza,
      },
    });
    //debugger
    return result.data;
  } catch (error) {
    throw new Error("");
  }
};

export const httpGetTableDate = async (idUt: number, idPrev: number, idFormProd: number, idTipoCarta: number, idColoreStampa: number, Base: number, Produndita: number, Altezza: number) => {
  try {
    const result = await applicationConnect.get<ResponseApi<TableDate>>(BASE_URL + "GetTableDate", {
      params: {
        idUt: idUt,
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta: idTipoCarta,
        IdColoreStampa: idColoreStampa,
        Base,
        Produndita,
        Altezza
      },
    });
    //debugger
    return result.data;
  } catch (error) {
    throw new Error("");
  }
};
export const httpGetStampaCaldo = async (idPrev: number, idFormProd: number, idTipoCarta: number, idColoreStampa: number) => {
  //debugger
  try {
    const result = await applicationConnect.get<ResponseApi<StaCalOpz[]>>(BASE_URL + "GetStamCalPlaz", {
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta: idTipoCarta,
        IdColoreStampa: idColoreStampa
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
  idColoreStampa: number,
  idFormProd: number,
  Base: number,
  Produndita: number,
  Altezza: number,
  Quantita: number,
  // StampaCaldo:number,
  // Plastificazione:number,
  facciatePagine: number,
  IVA: number,
  idUt: number,
  valuesStampaCaldoOpz: {}
) => {
  console.log("Api: ", valuesStampaCaldoOpz)
  try {


    const result = await applicationConnect.post<ResponseApi<TablePrezzi[]>>("Prodotto", {
      idPrev: idPrev,
      idTipoCarta: idTipoCarta,
      idColoreStampa: idColoreStampa,
      idFormProd: idFormProd,
      Base: Base,
      Produndita: Produndita,
      Altezza: Altezza,
      Quantita: Quantita,
      // StampaCaldo:StampaCaldo,
      // Plastificazione:Plastificazione,
      facciatePagine: facciatePagine,
      IVA: IVA,
      idUser: idUt,
      stampaOpz: valuesStampaCaldoOpz
    });

    return result.data;
  } catch (error) {
    throw new Error("");
  }
};
export const httpGetTableQuantitySelected = async (
  idPrev: number,
  idTipoCarta: number,
  idColoreStampa: number,
  idFormProd: number,
  Base: number,
  Produndita: number,
  Altezza: number,
  Quantita: number,
  // StampaCaldo:number,
  // Plastificazione:number,
  facciatePagine: number,
  IVA: number,
  idUt: number,
  valuesStampaCaldoOpz: {}
) => {
  console.log("Api: ", valuesStampaCaldoOpz)
  try {


    const result = await applicationConnect.post<ResponseApi<number>>("Prodotto/GetSelected", {
      idPrev: idPrev,
      idTipoCarta: idTipoCarta,
      idColoreStampa: idColoreStampa,
      idFormProd: idFormProd,
      Base: Base,
      Produndita: Produndita,
      Altezza: Altezza,
      Quantita: Quantita,
      // StampaCaldo:StampaCaldo,
      // Plastificazione:Plastificazione,
      facciatePagine: facciatePagine,
      IVA: IVA,
      idUser: idUt,
      stampaOpz: valuesStampaCaldoOpz
    });

    return result.data;
  } catch (error) {
    throw new Error("");
  }
};
export const getSvgImageService = async (
  Base: number,
  Profondita: number,
  Altezza: number,
  idPrev: number,
) => {
  try {
    const result = await applicationConnect.get<ResponseApi<SvgImage>>("Prodotto/SvgGraphic", {
      params: {
        idPrev: idPrev,
        Base: Base,
        Profondita: Profondita,
        Altezza: Altezza

      },
    });
    return result.data;
  } catch (error) {
    throw new Error("");
  }
};

export const httpGetShowOrientmiento = async (idPrev: number, idFormProd: number, idTipoCarta: number, idColoreStampa: number) => {
  try {
    const result = await applicationConnect.get<IshowOrientamiento>("Packagin/GetShowOrientamento", {
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta: idTipoCarta,
        IdColoreStampa: idColoreStampa
      },
    });
    console.warn('httpGetShowOrientmiento', result.data)
    return result.data
  } catch (error) {
    console.error('httpGetShowOrientmiento', error)
    throw ("Error")
  }
}

export const httpGetShowBloccoMisure = async (idPrev: number, idFormProd: number, idTipoCarta: number, idColoreStampa: number) => {
  try {
    const result = await applicationConnect.get<IshowOrientamiento>("Packagin/GetShowBloccoMisure", {
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta: idTipoCarta,
        IdColoreStampa: idColoreStampa
      },
    });
    console.warn('httpGetShowOrientmiento', result.data)
    return result.data
  } catch (error) {
    console.error('httpGetShowOrientmiento', error)
  }
}

export const httpGetShowQtaCustom = async (idPrev: number, idFormProd: number, idTipoCarta: number, idColoreStampa: number) => {
  try {
    const result = await applicationConnect.get<IshowOrientamiento>("Packagin/GetShowQtaCustom", {
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta: idTipoCarta,
        IdColoreStampa: idColoreStampa
      },
    });
    console.warn('httpGetShowOrientmiento', result.data)
    return result.data
  } catch (error) {
    console.error('httpGetShowOrientmiento', error)
  }
}

export const httpGetShowtxtQtaCustom = async (idPrev: number, idFormProd: number, idTipoCarta: number, idColoreStampa: number) => {
  try {
    const result = await applicationConnect.get<IshowOrientamiento>("Packagin/GetShowtxtQtaCustom", {
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta: idTipoCarta,
        IdColoreStampa: idColoreStampa
      },
    });
    //console.warn('httpGetShowOrientmiento',result.data)
    return result.data
  } catch (error) {
    console.error('httpGetShowOrientmiento', error)
  }
}

export const httpGetShowColumTable = async (idPrev: number) => {
  try {
    const result = await applicationConnect.get<ResponsePrezzoTabella>("Packagin/GetShowColumTabellaPrezzi", {
      params: {
        IdPrev: idPrev,
      },
    });
    //console.warn('httpGetShowOrientmiento',result.data)
    return result.data
  } catch (error) {
    console.error('httpGetShowOrientmiento', error)
  }
}

export const httpGetFormatoArray = async (idPrev: number) => {
  try {
    const result = await applicationConnect.get<ResponseFormato>("Packagin/GetFormato", {
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
    const result = await applicationConnect.get<IShowOpzioni>("Packagin/GetShowOpzioni", {
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
export const httpGetShowSVG = async (idPrev: number) => {
  try {
    const result = await applicationConnect.get<showSvgReponse>("Packagin/GetShowSVG", {
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

export const httpGetShowTabellaPrezzi = async (idPrev: number, idFormProd: number, IdTipoCarta: number, IdColoreStampa: number, base: number, profundita: number, altezza: number) => {
  try {
    const result = await applicationConnect.get<showSvgReponse>("Packagin/GetShowTabellaPrezzi", {
      params: {
        IdPrev: idPrev,
        IdFormProd: idFormProd,
        IdTipoCarta: IdTipoCarta,
        IdColoreStampa: IdColoreStampa,
        bases: base,
        profundita: profundita,
        altezza: altezza,
      },
    });
    //console.warn('httpGetFormatoArray',result.data)
    return result.data
  } catch (error) {
    throw new Error("");
  }
}
export const httpGetDisabledProfundita = async (IdPrev: number) => {
  try {
    const response = await applicationConnect.get<ResponseDisabledProfundita>("Packagin/GetDisabledProfundita", {
      params: {
        IdPrev
      }
    })

    return response.data
  } catch (error) {
    //console.log("httpGetDisabledProfundita \n", error);
    throw new Error("")
  }
}

export const httpGetShowFogliPagine = async (idPrev: number,
  idTipoCarta: number,
  idColoreStampa: number,
  idFormProd: number,
  Base: number,
  Produndita: number,
  Altezza: number,
  Quantita: number,
  // StampaCaldo:number,
  // Plastificazione:number,
  facciatePagine: number,
  IVA: number,
  idUt: number,
  valuesStampaCaldoOpz: {}
) => {
  console.log("Api: ", valuesStampaCaldoOpz)
  try {


    const result = await applicationConnect.post<ResponseApi<FofliPagine>>("Prodotto/GetCaricaFogliPagine", {
      idPrev: idPrev,
      idTipoCarta: idTipoCarta,
      idColoreStampa: idColoreStampa,
      idFormProd: idFormProd,
      Base: Base,
      Produndita: Produndita,
      Altezza: Altezza,
      Quantita: Quantita,
      // StampaCaldo:StampaCaldo,
      // Plastificazione:Plastificazione,
      facciatePagine: facciatePagine,
      IVA: IVA,
      idUser: idUt,
      stampaOpz: valuesStampaCaldoOpz
    });

    return result.data;
  } catch (error) {
    throw new Error("");
  }
}


export const httpGetFormatoParams = async (categoria: string) => {
  try {
    const result = await applicationConnect.get<ResponseFormatDinamico>('Packagin/GetFormatoDinamico', {
      params: {
        Categoria: categoria
      }
    })

    return result.data;
  } catch (error) {
    throw new Error("");
  }
}

export const httpGetShowAlertMassimo = async (idPrev: number,
  idTipoCarta: number,
  idColoreStampa: number,
  idFormProd: number,
  Base: number,
  Produndita: number,
  Altezza: number,
  Quantita: number,
  facciatePagine: number,
  IVA: number,
  idUt: number,
  valuesStampaCaldoOpz: {}) => {
  try {
    const result = await applicationConnect.post<DataAlertMassimo>('Prodotto/GetAlertMassimo', {
      idPrev: idPrev,
      idTipoCarta: idTipoCarta,
      idColoreStampa: idColoreStampa,
      idFormProd: idFormProd,
      Base: Base,
      Produndita: Produndita,
      Altezza: Altezza,
      Quantita: Quantita,
      // StampaCaldo:StampaCaldo,
      // Plastificazione:Plastificazione,
      facciatePagine: facciatePagine,
      IVA: IVA,
      idUser: idUt,
      stampaOpz: valuesStampaCaldoOpz
    });
    return result.data;
  } catch (error) {
    throw new Error("");
  }

}
export const httpGetCalcolaTuto = async (code: string,
  qtaSlezionata: number,
  idPrevTP: number,
  idTipoCartaTP: number,
  idColoreStampaTP: number,
  idFormProdTP: number,
  baseTP: number,
  depthTP: number,
  heightTP: number,
  quantityTP: number,
  idFogliTP: number,
  ivaTP: number,
  valuesStapaCaldoOpzTP: Record<string, number>,idUt:number) => {
  try {

    const postCalcolaTuto = {
      code: code,
      qtaSelezionata: qtaSlezionata,
      prodotto: {
        idPrev: idPrevTP,
        idTipoCarta: idTipoCartaTP,
        idColoreStampa: idColoreStampaTP,
        idFormProd: idFormProdTP,
        Base: baseTP,
        Produndita: depthTP,
        Altezza: heightTP,
        Quantita: quantityTP,
        facciatePagine: idFogliTP,
        IVA: ivaTP,
        idUser: idUt,
        stampaOpz: valuesStapaCaldoOpzTP
      }
    }

    const result = await applicationConnect.post<ResponseGetCalcolaTuto>('Packagin/GetCalcolaTuto',postCalcolaTuto);
    return result.data;
  } catch (error) {
    //console.log('ERROR CALCOLA TUTO',error)
    throw new Error("");
  }
}

export const httpGetHelperData =async (IdPrev: number, IdFormProd: number, IdTipoCarta: number, IdColoreStampa: number, IdFogli: number) => {
  try {
    const result = await applicationConnect.get<ResposeGetHelperDataProdotto>('Packagin/GetHelperDataProdotto',{params:{
      IdPrev,
      IdFormProd,
      IdTipoCarta,
      IdColoreStampa,
      IdFogli,
    }});

    return result.data;
  } catch (error) {
    throw new Error("")
  }
}