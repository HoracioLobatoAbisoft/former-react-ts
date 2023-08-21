import applicationConnect from "../api"
import { ResponseGetUtente } from "../interface/Utente"

export const httpGetUtente =async (idUt:number) => {
    try {
        const response = await applicationConnect.get<ResponseGetUtente>('Login/GetUserLoginById',{params:{idUt}})
        return response.data;
    } catch (error) {
        //console.log(error)
        throw new Error("")
    }
}