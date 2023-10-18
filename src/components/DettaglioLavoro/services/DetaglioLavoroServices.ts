import applicationConnect from "../../../api"
import { ResponseGetDetagglioLavoro } from "../interfaces/GetDetaglioLavoro";
import { FormEditData, ResponsePutModificaNoteNome, } from "../interfaces/PutEditNomeNote";
import { ResponsePutUploadFileLavoto } from "../interfaces/PutUploadFileLavoro";

export const httpGetDettaglioLavoro = async (IdLavoro: number) => {
    const response = await applicationConnect.get<ResponseGetDetagglioLavoro>('/Lavori/GetDettaglioLavoro', {
        params: {
            IdLavoro
        }
    })
    return response.data;
}

export const httpPutModificaNoteNome = async (data: FormEditData) => {
    const response = await applicationConnect.put<ResponsePutModificaNoteNome>('/Lavori/PutModificaNoteNome', data)
    return response.data;
}

export const httpPutUploadFileLavoro = async (frontePDF: File | null, retroPDF: File | null,IdLavoro:number) => {
    var formData  = new FormData();
    if (frontePDF) {
        formData.append("fileF", frontePDF);
    }
    if (retroPDF) {
        formData.append("fileR", retroPDF);
    }

    const response = await applicationConnect.put<ResponsePutUploadFileLavoto>(`/Lavori/PutUploadFileLavoro?IdLavoro=${IdLavoro}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return response.data;
}