import React, { useEffect, useState } from 'react'
import {  httpGetLavori, httpDeleteLavoro } from '../services/LavoriServices';
import { LavoriList, ReponseGetLavori } from '../Interfaces/LavoriIntarface';
import { enOperationFrame } from '../../../enHelpers/enOperationFrame';
import { GLOBAL_CONFIG } from '../../../_config/global';
import { useNavigate } from 'react-router-dom';

const useITuoiLavori = () => {
    const navigate = useNavigate()

    const [listLavori, setListLavori] = useState<LavoriList[]>([])
    const [pageLavori, setPageLavori] = useState<number[]>([])
    /**
     * *Funciones Get 
     * @param idUt id del usuario
     * @param pageNumber numero de paginas
     * @returns retorna la respuesta del servicio
     */

    const getLavori = async (idUt: number, pageNumber: number) => {
        try {
            const responseGetLavori = await httpGetLavori(idUt, pageNumber);
            return responseGetLavori;
        } catch (error) {
            console.warn('error', error)
        }
    }

    const handleGetLavori = async ( pageNumber: number,idUt= 1684,) => {
        const responseGetLavori = await getLavori(idUt, pageNumber);
        setListLavori(responseGetLavori?.list??[]);
        setPageLavori( responseGetLavori?.paginatedList??[]); 
    }

    const deleteLavoro = async (idLavoro: number|string) => {
        try {
            const responseDeleteLavore = await httpDeleteLavoro(idLavoro);
            handleGetLavori(1);
        } catch (error) {
            console.log('error', error)
        }
    }


    /*
        *Funcones handle
    */

    


    useEffect(() => {
        handleGetLavori(1);
    }, [])

    useEffect(()=>{
        console.log('listLavori', listLavori)
    },[listLavori])

    const handleRedirectToDetaglioLavoro = (idLavori: number|string) => {
        navigate(`/${idLavori}/dettaglio-lavoro`)
        window.parent.postMessage({ operation: enOperationFrame.hidden }, GLOBAL_CONFIG.IMG_IP);
        //window.parent.postMessage({ operation: enOperationFrame.redirectDetaglioLavori, id: idLavori }, GLOBAL_CONFIG.IMG_IP);
    }


    const handleNewTagListinoTemplate = (path: number|string) => {
        window.parent.postMessage({ operation: enOperationFrame.newTagListinoTemplate, path: path }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleDeleteLavoro = (idLavoro: number|string) => {
        deleteLavoro(idLavoro);
    }
  



    return {
        listLavori,
        pageLavori,
        handleGetLavori,
        handleRedirectToDetaglioLavoro,
        handleNewTagListinoTemplate,
        handleDeleteLavoro,
    }
}

export default useITuoiLavori