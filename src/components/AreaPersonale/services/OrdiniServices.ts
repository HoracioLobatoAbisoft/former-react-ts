import applicationConnect from "../../../api"
import { ReponseGetOridini } from "../Interfaces/OrdiniIntarface"

export const httpGetOrdini=async (idUtn:number,pageNumber:number) => {
    const response = await applicationConnect.get<ReponseGetOridini>('/Ordini',{params:{
        idUtn,
        pageNumber
    }})

    return response.data;
}