import React, { useEffect, useState } from 'react'
import { httpGetOrdini } from '../services/OrdiniServices';
import { OrdineList } from '../Interfaces/OrdiniIntarface';

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

    const handleGetOrdini = async (idUt: number, pageNumber: number) => {
        const responseGetOrdini = await getOrdini(idUt, pageNumber);
        setListOrdini(responseGetOrdini ? responseGetOrdini.ordineList : []);
        setPageOrdini(responseGetOrdini ? responseGetOrdini?.paginationList : []);
    }


    useEffect(() => {
        handleGetOrdini(1684,1);
    }, [])


    return {
        listOrdini,
        pageOrdini
    }
}

export default useITuoiOrdini