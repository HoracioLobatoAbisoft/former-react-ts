import React, { useEffect, useState } from 'react'
import { httpGetOrdini } from '../services/OrdiniServices';
import { OrdineList } from '../Interfaces/OrdiniIntarface';
import { enOperationFrame } from '../../../enHelpers/enOperationFrame';
import { GLOBAL_CONFIG } from '../../../_config/global';
const useITuoiOrdini = () => {

    const [listOrdini, setListOrdini] = useState<OrdineList[]>([])
    const [pageOrdini, setPageOrdini] = useState<number[]>([])
    /**
     * *Funciones Get 
     * @param idUt id del usuario
     * @param pageNumber numero de paginas
     * @returns retorna la respuesta del servicio
     */

    const getOrdini = async (idUt: number, pageNumber: number) => {
        try {
            const responseGetOrdini = await httpGetOrdini(idUt, pageNumber);
            return responseGetOrdini.data;
        } catch (error) {
            console.log('error', error)
        }
    }


    /*
        *Funcones handle
    */

    const handleGetOrdini = async ( pageNumber: number,idUt= 1684,) => {
        const responseGetOrdini = await getOrdini(idUt, pageNumber);
        setListOrdini(responseGetOrdini ? responseGetOrdini.ordineList : []);
        setPageOrdini(responseGetOrdini ? responseGetOrdini?.paginationList : []);
    }


    useEffect(() => {
        handleGetOrdini(1);
    }, [])

    const handleRedirectToDetaglioOrdini = (idOrdini: number|string) => {
        window.parent.postMessage({ operation: enOperationFrame.redirectDetaglioOrdini, id: idOrdini }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleRedirectToDetaglioLavoro = (idLavoro: number|string) => {
        window.parent.postMessage({ operation: enOperationFrame.redirectDetaglioLavoro, id: idLavoro }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleNewTagListinoTemplate = (path: number|string) => {
        window.parent.postMessage({ operation: enOperationFrame.newTagListinoTemplate, path: path }, GLOBAL_CONFIG.IMG_IP);
    }

    return {
        listOrdini,
        pageOrdini,
        handleGetOrdini,
        handleRedirectToDetaglioOrdini,
        handleRedirectToDetaglioLavoro,
        handleNewTagListinoTemplate,
    }
}

export default useITuoiOrdini