import applicationConnect from "../../../api";
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
    return result.data;
  } catch (error) {
    throw new Error("");
  }
};
