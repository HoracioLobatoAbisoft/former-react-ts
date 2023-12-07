import { httpGetUtente } from "../../../services/UtenteService";
import { ObjCarrello } from "../../formProdottoV1/interface/ObjCarrrello";
import { httpGetAplicaCouponSconto, httpGetCaricaCorriere, httpGetDatesAlleghiPDF, httpGetIndirizzo, httpGetMetodiPagamento, httpGetTotaleProvisorio } from "../services/Services";

export const getTotaleProvisorio = async (idUt: number, TotalePeso: number, cero: number, TotalePrezzo: number, Sconto: number | null, tipoPagamento: number, IdCorriere: number, cap?: string) => {
    try {
        const responseProvisorio = await httpGetTotaleProvisorio(idUt, TotalePeso, cero, TotalePrezzo, Sconto, tipoPagamento, IdCorriere, cap);
        return responseProvisorio.data;
    } catch (error) {
        //console.log('error use Carrello ', error)
    }
}

export const getCaricaCorriere = async (IdUtCC: number) => {
    const responseCaricaCorriere = await httpGetCaricaCorriere(IdUtCC);
    return responseCaricaCorriere;
}

export const getIndirizzoUt = async (IdUt: number) => {
    const responseIndirizzo = await httpGetIndirizzo(IdUt);
    return (responseIndirizzo.data);
}

export const getDataUtn = async (idUt: number) => {
    try {
        const responseDataUtn = await httpGetUtente(idUt);
        return (responseDataUtn.data)
    } catch (error) {
        //console.log(error)
    }
}

export const getDatesAlleghiPDF = async () => {
    const responseOreMinuti = await httpGetDatesAlleghiPDF();
    return (responseOreMinuti.data);
}

export const getMetodiPagamento = async (IdUt: number, TotaleCarrello: number, IdMetodoConsegnaScelto: number) => {
    const responseMetodiPagamento = await httpGetMetodiPagamento(IdUt, TotaleCarrello, IdMetodoConsegnaScelto);
    return (responseMetodiPagamento.data)
}

export const getAplicaCouponSconto = async (codice: string, tipoUtn: number | undefined, totalLavori: number, ordines: ObjCarrello[]) => {

    const responseAplicaCouponSconto = await httpGetAplicaCouponSconto(codice, tipoUtn, totalLavori, ordines);
    return responseAplicaCouponSconto.data
}