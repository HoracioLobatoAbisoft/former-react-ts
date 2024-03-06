import { httpGetUtente } from "../../../services/UtenteService";
import { getSvgImageService, httpGetAggiornaReview, httpGetAllData, httpGetCalcolaTuto, httpGetColoreStampa, httpGetDescrizioniDinamica, httpGetDisabledProfundita, httpGetFormatoArray, httpGetFormatoParams, httpGetFormatoStr, httpGetHelperData, httpGetOpzioni, httpGetOpzioniCarrello, httpGetProdottoConsigliato, httpGetRecensioni, httpGetShowAlertMassimo, httpGetShowBloccoMisure, httpGetShowColumTable, httpGetShowFogliPagine, httpGetShowOpzioni, httpGetShowOrientmiento, httpGetShowQtaCustom, httpGetShowSVG, httpGetShowTabellaPrezzi, httpGetStampaCaldo, httpGetTableDate, httpGetTablePrezzi, httpGetTipoCarta } from "../services";

interface httpProps {
    idPrev: number,
    idFormProd: number,
    IdTipoCarta: number,
    IdColoreStampa: number,
}

type HttpColoreStamp = Omit<httpProps, 'IdColoreStampa'>

interface httpTableDate extends httpProps {
    idUt: number,
    base: number,
    profundita: number,
    altezza: number,
}

interface httpDimensioniStr extends httpTableDate {
    IdLav?: number | null,
}

interface httpSVG {
    idPrev: number,
    base: number,
    profundita: number,
    altezza: number,
}
interface httpCalcolaTuto extends httpTableDate {
    code: string,
    qtaSlezionata: number,
    prezzo: number,
    quantity: number
    idFogli: number,
    iva: number,
    valuesStampaCaldoOpz: Record<string, number>,
}

interface httpTablePrezzi extends httpTableDate {
    quantita: number, facciatePagine: number, iva: number, valuesStampaCaldoOpz: Record<string, number>,
}

interface httpHelperData extends httpProps {
    idFogli: number;
}
export interface RequestData {
    idUt: number;
    idPrev: number,
    idFormProd: number,
    IdTipoCarta: number,
    IdColoreStampa: number,
    categoria: string
    uri: string
    bases: number,
    profundita: number,
    altezza: number,
}
export const getAllData = async (params: RequestData) => {
    const response = await httpGetAllData(params);
    return response.data;
}

export const getFotmato = async (idPrev: number) => {
    const response = await httpGetFormatoArray(idPrev);
    return response.data;
};

export const getShowOrientamiento = async ({ IdColoreStampa, IdTipoCarta, idFormProd, idPrev }: httpProps) => {
    const response = await httpGetShowOrientmiento(idPrev, idFormProd, IdTipoCarta, IdColoreStampa);
    return response.data;
}

export const getTipoCarta = async (idPrev: number, idFormProd: number) => {
    const response = await httpGetTipoCarta(idPrev, idFormProd);
    return response.data;
}

export const getColoreStampa = async ({ IdTipoCarta, idFormProd, idPrev }: HttpColoreStamp) => {
    const response = await httpGetColoreStampa(idPrev, idFormProd, IdTipoCarta);
    return response.data;
}

export const getStampaCaldo = async ({ IdColoreStampa, IdTipoCarta, idFormProd, idPrev }: httpProps) => {
    const response = await httpGetStampaCaldo(idPrev, idFormProd, IdTipoCarta, IdColoreStampa);
    return response.data;
}

export const getTableDate = async ({ IdColoreStampa, IdTipoCarta, altezza, base, idFormProd, idPrev, profundita, idUt }: httpTableDate) => {
    const response = await httpGetTableDate(idUt, idPrev, idFormProd, IdTipoCarta, IdColoreStampa, base, profundita, altezza);
    return response.data;
}

export const getCalcolaTuto = async ({ IdColoreStampa, IdTipoCarta, altezza, base, code, idFogli, idFormProd, idPrev, idUt, iva, prezzo, profundita, qtaSlezionata, quantity, valuesStampaCaldoOpz }: httpCalcolaTuto) => {
    const response = await httpGetCalcolaTuto(code, qtaSlezionata, prezzo, idPrev, IdTipoCarta, IdColoreStampa, idFormProd, base, profundita, altezza, quantity, idFogli, iva, valuesStampaCaldoOpz, idUt);
    return response.data
}

export const getTablePrezzi = async ({ idPrev, IdTipoCarta, IdColoreStampa, idFormProd, base, profundita, altezza, quantita, facciatePagine, iva, idUt, valuesStampaCaldoOpz }: httpTablePrezzi) => {
    const response = await httpGetTablePrezzi(idPrev, IdTipoCarta, IdColoreStampa, idFormProd, base, profundita, altezza, quantita, facciatePagine, iva, idUt, valuesStampaCaldoOpz);
    return response.data;
}

export const getUtenteData = async (idUt: number) => {
    const response = await httpGetUtente(idUt);
    return response.data;
}

export const getShowFogliPagine = async ({ idPrev, IdTipoCarta, IdColoreStampa, idFormProd, base, profundita, altezza, quantita, facciatePagine, iva, idUt, valuesStampaCaldoOpz }: httpTablePrezzi) => {
    const response = await httpGetShowFogliPagine(idPrev, IdTipoCarta, IdColoreStampa, idFormProd, base, profundita, altezza, quantita, facciatePagine, iva, idUt, valuesStampaCaldoOpz);
    return response;
}

export const getOpzioni = async ({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa, base, profundita, altezza, idUt = 0 }: httpTableDate) => {
    const response = await httpGetOpzioni(idPrev, idFormProd, IdTipoCarta, IdColoreStampa, base, profundita, altezza);
    return response.data;
}

export const getShowQtaCustom = async ({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa }: httpProps) => {
    const response = await httpGetShowQtaCustom(idPrev, idFormProd, IdTipoCarta, IdColoreStampa);
    return response;
}

export const getShowColumnTable = async (idPrev: number) => {
    const response = await httpGetShowColumTable(idPrev);
    return response?.data;
}

export const getShowBloccoMisure = async ({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa }: httpProps) => {
    const response = await httpGetShowBloccoMisure(idPrev, idFormProd, IdTipoCarta, IdColoreStampa);
    return response;
}

export const getShowOpzioni = async (idPrev: number) => {
    const response = await httpGetShowOpzioni(idPrev);
    return response;
}

export const getShowTabellaPrezzi = async ({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa, base, profundita, altezza }: httpTableDate) => {
    const response = await httpGetShowTabellaPrezzi(idPrev, idFormProd, IdTipoCarta, IdColoreStampa, base, profundita, altezza);
    return response;
}

export const getDisableProfundita = async (idPrev: number) => {
    const response = await httpGetDisabledProfundita(idPrev);
    return response.data;
}

export const getFormatoDinamico = async (IdCategoria: string) => {
    const response = await httpGetFormatoParams(IdCategoria);
    return response.data;
}

export const getShowSVG = async (idPrev: number) => {
    const response = await httpGetShowSVG(idPrev);
    return response.data;
}
export const getSVG = async ({ base, profundita, altezza, idPrev }: httpSVG) => {
    const response = await getSvgImageService(base, profundita, altezza, idPrev);
    return response.data;
}

export const getOpizioniCarrello = async ({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa }: httpProps) => {
    const response = await httpGetOpzioniCarrello(idPrev, idFormProd, IdTipoCarta, IdColoreStampa);
    return response.data;
}

export const getHelpersData = async ({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa, idFogli }: httpHelperData) => {
    const response = await httpGetHelperData(idPrev, idFormProd, IdTipoCarta, IdColoreStampa, idFogli);
    return response.data;
}

export const getFormatoStr = async ({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa, base, profundita, altezza, IdLav }: httpDimensioniStr) => {
    const response = await httpGetFormatoStr(idPrev, idFormProd, IdTipoCarta, IdColoreStampa, base, profundita, altezza, IdLav);
    return response.data;
}

export const getProdottoConsigliato = async ({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa }: httpProps, uri: string) => {
    const response = await httpGetProdottoConsigliato(idPrev, idFormProd, IdTipoCarta, IdColoreStampa, uri);
    return response.data;
}
export const getResencioni = async ({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa }: httpProps, uri: string) => {
    const response = await httpGetRecensioni(idPrev, idFormProd, IdTipoCarta, IdColoreStampa, uri);
    return response.data;
}
export const getAggiornaReview = async ({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa }: httpProps, uri: string) => {
    const response = await httpGetAggiornaReview(idPrev, idFormProd, IdTipoCarta, IdColoreStampa, uri);
    return response.data;
}

export const getDescrizioniDinammica = async ({ idPrev, idFormProd, IdTipoCarta, IdColoreStampa }: httpProps) => {
    const response = await httpGetDescrizioniDinamica(idPrev, idFormProd, IdTipoCarta, IdColoreStampa);
    return response.data;
}

export const getShowAlertMassimo = async ({ idPrev, IdTipoCarta, IdColoreStampa, idFormProd, base, profundita, altezza, quantita, facciatePagine, iva, idUt, valuesStampaCaldoOpz }: httpTablePrezzi) => {
    const response = await httpGetShowAlertMassimo(idPrev, IdTipoCarta, IdColoreStampa, idFormProd, base, profundita, altezza, quantita, facciatePagine, iva, idUt, valuesStampaCaldoOpz);
    return response.data;
}