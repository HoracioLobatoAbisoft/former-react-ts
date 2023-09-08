import applicationConnect from "../../../api"
import { ResponseGetOrdiniById } from "../Interfaces/GetOrdiniById";
import { ReponseGetLavori, ReponseDeleteLavoro } from "../Interfaces/LavoriIntarface";

export const httpGetLavori=async (idUt:number, pageNumber:number) => {
    const response = await applicationConnect.get<ReponseGetLavori>('/Lavori',{params:{
        idUt,
        pageNumber
    }})
    return response.data;
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