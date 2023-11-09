import applicationConnect from "../../../api"
import { ResponseGetNotifiche } from "../interfaces/GetNotifiche"

export const httpGetNotifiche =async (IdUtente:number,Differenza:number,uri:string) => {
    const response = await applicationConnect.get<ResponseGetNotifiche>('/Cerca/GetNotifiche',{params:{
        IdUtente,Differenza,uri
    }});
    return response.data
}