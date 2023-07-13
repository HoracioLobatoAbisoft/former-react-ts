import applicationConnect from "../../../api"
import { ReponseGetTotaleProvisorio } from "../Interfaces/totaleProvvisorio"

export const httpGetTotaleProvisorio =async (IdUt: number,PesoKg:number,pesoVolumetrico:number,prezzoTotaleOrdini:number) => {
    try {
        
        const response = await applicationConnect.get<ReponseGetTotaleProvisorio>('Packagin/GetTotaleProvisorio',
            {params:{
                IdUt,
                PesoKg,
                pesoVolumetrico,
                prezzoTotaleOrdini,
            }}
        )
        
        return response.data

    } catch (error) {
        throw new Error("")
    }
}