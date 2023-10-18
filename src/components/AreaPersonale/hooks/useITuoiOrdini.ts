import React, { useEffect, useState } from 'react'
import { httpDeleteLavoro, httpDeleteOrdine, httpGetOrdini } from '../services/OrdiniServices';
import { OrdineList } from '../Interfaces/OrdiniIntarface';
import { enOperationFrame } from '../../../enHelpers/enOperationFrame';
import { GLOBAL_CONFIG } from '../../../_config/global';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { httpCheckOutPayPal } from '../../paypal/services/PayPalPServices';
const useITuoiOrdini = () => {
    const navigate = useNavigate()

    const [listOrdini, setListOrdini] = useState<OrdineList[]>([])
    const [pageOrdini, setPageOrdini] = useState<number[]>([])
    const [openLoading, setOpenLoading] = useState(false)

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const tokenPP = params.get('tokenPP');
    const idUt = params.get('id');

    console.log('tokenpp', tokenPP, idUt)
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

    const deleteOrdini = async (idOrdine: number | string) => {
        try {
            const responseDeleteOrdine = await httpDeleteOrdine(idOrdine);
            handleGetOrdini(1)
        } catch (error) {
            console.log('error', error)
        }
    }

    const deleteLavoro = async (idLavoro: number | string) => {
        try {
            const responseDeleteOrdine = await httpDeleteLavoro(idLavoro);
            console.log('responseDeleteOrdine', responseDeleteOrdine);
            handleGetOrdini(1)
        } catch (error) {
            console.log('error', error)
        }
    }


    /*
        *Funcones handle
    */

    const handleGetOrdini = async (pageNumber: number, idUt = 1684,) => {
        setOpenLoading(true);
        const responseGetOrdini = await getOrdini(idUt, pageNumber);
        setListOrdini(responseGetOrdini ? responseGetOrdini.ordineList : []);
        setPageOrdini(responseGetOrdini ? responseGetOrdini?.paginationList : []);
        setOpenLoading(false);
    }


    useEffect(() => {
        handleGetOrdini(1);
    }, [])

    const handleRedirectToDetaglioOrdini = (idOrdini: number | string) => {
        navigate('/dettaglio-lavoro')
        window.parent.postMessage({ operation: enOperationFrame.hidden }, GLOBAL_CONFIG.IMG_IP);

        //window.parent.postMessage({ operation: enOperationFrame.redirectDetaglioOrdini, id: idOrdini }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleRedirectToDetaglioLavoro = (idLavoro: number | string) => {
        window.parent.postMessage({ operation: enOperationFrame.redirectDetaglioLavoro, id: idLavoro }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleNewTagListinoTemplate = (path: number | string) => {
        window.parent.postMessage({ operation: enOperationFrame.newTagListinoTemplate, path: path }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleDeleteLavoro = (idLavoro: number | string) => {
        deleteLavoro(idLavoro);
    }

    const handleDeleteOrdine = (idOrdine: number | string) => {
        deleteOrdini(idOrdine);
    }

    /*
        *!----------!!!------ Pay Pal--------- !!!-----! 
    */

    const handleCheackOutPayPal = async () => {
        if (tokenPP != null || tokenPP != undefined) {
            const responseCheckOutPayPal = await httpCheckOutPayPal(tokenPP);
            console.log('responseCheckOutPayPal',responseCheckOutPayPal)
        }
    }


    return {
        listOrdini,
        pageOrdini,
        handleGetOrdini,
        handleRedirectToDetaglioOrdini,
        handleRedirectToDetaglioLavoro,
        handleNewTagListinoTemplate,
        handleDeleteLavoro,
        handleDeleteOrdine,
        openLoading,
        handleCheackOutPayPal
    }
}

export default useITuoiOrdini