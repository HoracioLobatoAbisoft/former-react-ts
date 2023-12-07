import applicationConnect from "../../../../../api"
import { ResponseGetLocalita } from "../interfaces/GetCaricaLocalita";
import { ResponseGetNazioni } from "../interfaces/GetCaricaNazioni";
import { IFormIndirizzo, ResponsePostIndirizzo } from "../interfaces/IFormIndirizo";

export const httpGetCaricaLocalita = async (Cap: string) => {
    const response = await applicationConnect.get<ResponseGetLocalita>(`/Indirizo/GetCaricaLocalita`, {
        params: {
            Cap,
        }
    });
    return response.data;
}

export const httpGetCaricaNazioni = async () => {
    const response = await applicationConnect.get<ResponseGetNazioni>(`/Indirizo/GetCaricaNazioni`);
    return response.data;
}

export const httpPostIndirizzo = async (data: IFormIndirizzo) => {
    const response = await applicationConnect.post<ResponsePostIndirizzo>(`/Indirizo`, data);
    return response.data;   
}