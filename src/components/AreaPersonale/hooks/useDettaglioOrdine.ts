import { useParams } from "react-router-dom";
import { httpDeleteLavoro, httpGetOrdiniById } from "../services/OrdiniServices";
import { useEffect, useState } from "react";
import { DataGetOrdiniById } from "../Interfaces/GetOrdiniById";
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";
import { GLOBAL_CONFIG } from "../../../_config/global";

const useDettaglioOrdine = () => {

    const { idConsegna } = useParams()

    const [ordiniData, setOrdiniData] = useState<DataGetOrdiniById>()

    /*
        *============================>Funciones Get<==================================== 
    */

    const getOrdiniById = async (idOI: number) => {
        try {
            const response = await httpGetOrdiniById(idOI);
            return response.data
        } catch (error) {
            console.log('error', error);
        }
    }




    /*
        *--------------------------->Funciones Handle secundarias<------------------------ 
    */

    const deleteLavoro = async (idLavoro: number | string) => {
        try {
            const responseDeleteOrdine = await httpDeleteLavoro(idLavoro);
            handleDataOrdiniById();
        } catch (error) {
            console.log('error', error)
        }
    }


    const handleDataOrdiniById = async () => {
        if (idConsegna) {
            const response = await getOrdiniById(Number(idConsegna));
            setOrdiniData(response)
        }
    }

    const handleRedirectToDetaglioOrdini = (idOrdini: number | string) => {
        window.parent.postMessage({ operation: enOperationFrame.redirectDetaglioOrdini, id: idOrdini }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleNewTagListinoTemplate = (path: number | string) => {
        window.parent.postMessage({ operation: enOperationFrame.newTagListinoTemplate, path: path }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleDeleteLavoro = (idLavoro: number|string) => {
        deleteLavoro(idLavoro);
    }

    useEffect(() => {
        handleDataOrdiniById();
    }, [])


    return {
        ordiniData,
        handleRedirectToDetaglioOrdini,
        handleNewTagListinoTemplate,
        handleDeleteLavoro,
    }
}

export default useDettaglioOrdine