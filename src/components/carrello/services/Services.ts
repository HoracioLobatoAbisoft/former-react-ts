import applicationConnect from "../../../api"
import { ObjCarrello } from "../../formProdottoV1/interface/ObjCarrrello"
import { DataPostAquistaOra,  ResponsePostAquistaOra } from "../Interfaces/AquistaOra"
import { ResponseGetCaricaCorriere } from "../Interfaces/CaricaCorriere"
import { ResponseGetCorriereSelezionata } from "../Interfaces/Corriere"
import { ResponseGetAplicaCouponSconto } from "../Interfaces/CouponSconto"
import { ResponseGetIndirizzo } from "../Interfaces/Indirizzo"
import { ResponseGetTipoPagamento } from "../Interfaces/TipoPagamento"
import { ResponseGetAlleghiPDF } from "../Interfaces/dateAlleghiPDF"
import { ReponseGetTotaleProvisorio } from "../Interfaces/totaleProvvisorio"
import { ResponseGetPromo } from "../Interfaces/Promo"

export const httpGetTotaleProvisorio = async (IdUt: number, PesoKg: number, pesoVolumetrico: number, prezzoTotaleOrdini: number,Sconto:number | null,tp:number,IdCorriere:number,cap? :string) => {
    try {
        const response = await applicationConnect.get<ReponseGetTotaleProvisorio>('Packagin/GetTotaleProvisorio',
            {
                params: {
                    IdUt,
                    PesoKg,
                    pesoVolumetrico,
                    prezzoTotaleOrdini,
                    Sconto,
                    tp,
                    IdCorriere,
                    cap
                }
            }
        )

        return response.data

    } catch (error) {
        throw new Error("")
    }
}

export const httpGetIndirizzo = async (idUt: number) => {
    try {

        const response = await applicationConnect.get<ResponseGetIndirizzo>('Indirizo', {
            params: {
                idUt
            }
        });
        return response.data;
    } catch (error) {
        throw new Error("")
    }
}

export const httpGetDatesAlleghiPDF = async () => {
    try {
        const response = await applicationConnect.get<ResponseGetAlleghiPDF>('Packagin/GetDatesAlleghiPDF');
        return response.data;

    } catch (error) {
        throw new Error("")
    }
}

export const httpGetMetodiPagamento = async (IdUt: number, TotaleCarrello: number, IdMetodoConsegnaScelto: number) => {
    try {
        const response = await applicationConnect.get<ResponseGetTipoPagamento>('Packagin/GetMetodiPagamento', {
            params: {
                IdUt,
                TotaleCarrello,
                IdMetodoConsegnaScelto,
            }
        })
        return response.data;
    } catch (error) {
        throw new Error("")
    }
}

export const httpGetAplicaCouponSconto = async (CodiceCoupon: string, TipoUtenteConnesso: number | undefined, TotaleImportiNettiOriginale: number, Ordines: ObjCarrello[]) => {
    try {
        const response = await applicationConnect.post<ResponseGetAplicaCouponSconto>(`Packagin/GetAplicaCouponSconto?CodiceCoupon=${CodiceCoupon}&TipoUtenteConnesso=${TipoUtenteConnesso}&TotaleImportiNettiOriginale=${TotaleImportiNettiOriginale}`,Ordines )

        return response.data;
    } catch (error) {
        //console.log(error)
        throw new Error("")
    }
}

export const httpGetCaricaCorriere =async (IdUt:number) => {
    try {
        const response = await applicationConnect.get<ResponseGetCaricaCorriere>('Packagin/GetCaricaCorriere',{params:{
            IdUt
        }});
        return response.data;
    } catch (error) {
        ////console.log(error)
        throw new Error("")
    }
}

export const httpGetCorriereSelezionata =async (IdCorriere:number,Cap:string,IdPrev?:number,IdFormProd?:number,IdTipoCarta?:number,IdColoreStampa?:number) => {
    try {
        const response = await applicationConnect.get<ResponseGetCorriereSelezionata>('Packagin/GetCorriereSelezionata',{params:{
            IdCorriere,
            Cap,
            IdPrev,
            IdFormProd,
            IdTipoCarta,
            IdColoreStampa
        }})
        return response.data
    } catch (error) {
        throw new Error("")
    }
}

export const httpPostAquistaOra =async (data:DataPostAquistaOra) => {
    try {
        const response = await applicationConnect.post<ResponsePostAquistaOra>('AcquistaOra/PostCreateOrdine',data);
        return response.data;
    } catch (error) {
        throw new Error("")
    }
}

export const httpGetPromo = async (idUt: number) => {
    try {

        const response = await applicationConnect.get<ResponseGetPromo>('Promo/GetPromo', {
            params: {
                idUt
            }
        });
        return response.data;
    } catch (error) {
        throw new Error("")
    }
}