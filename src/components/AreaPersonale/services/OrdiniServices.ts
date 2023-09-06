import applicationConnect from "../../../api"
import { ResponseGetOrdiniById } from "../Interfaces/GetOrdiniById";
import { ReponseGetOridini, ReponseDeleteOridine, ReponseDeleteLavoro } from "../Interfaces/OrdiniIntarface"

export const httpGetOrdini=async (idUtn:number,pageNumber:number) => {
    const response = await applicationConnect.get<ReponseGetOridini>('/Ordini',{params:{
        idUtn,
        pageNumber
    }})

    return response.data;
}

export const httpGetOrdiniById =async (idConsegna:number) => {
    const response = await applicationConnect.get<ResponseGetOrdiniById>('Ordini/GetById',{params:{idConsegna}});
    return response.data;
}

export const httpDeleteOrdine = async (idConsegne: number|string) => {
    try {
        const response = await applicationConnect.delete<ReponseDeleteOridine>('/Ordini/DeleteOrdine', {params:{
            idConsegne:idConsegne
        }});
        return response.data;

    } catch (error) {
        throw new Error("")
    }
}

export const httpDeleteLavoro = async (idLavoro: number|string) => {
    try {
        const response = await applicationConnect.delete<ReponseDeleteLavoro>('/Lavori/DeleteLavoro', {params:{
            IdLavoro:idLavoro
        }});
        return response.data;

    } catch (error) {
        throw new Error("")
    }
}