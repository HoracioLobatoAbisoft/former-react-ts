import React, { useEffect, useState } from 'react'
import { httpDeleteLavoro, httpDeleteOrdine, httpGetOrdini } from '../services/OrdiniServices';
import { OrdineList } from '../Interfaces/OrdiniIntarface';
import { enOperationFrame } from '../../../enHelpers/enOperationFrame';
import { GLOBAL_CONFIG } from '../../../_config/global';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { httpCheckOutPayPal } from '../../paypal/services/PayPalPServices';
import { getDataUtn } from '../../carrello/helpers/servicesHelpers';
import { DataResponseGetUtente } from '../../../interface/Utente';
const useITuoiOrdini = () => {
    const navigate = useNavigate()

    const [listOrdini, setListOrdini] = useState<OrdineList[]>([])
    const [pageOrdini, setPageOrdini] = useState<number[]>([])
    const [openLoading, setOpenLoading] = useState(false)
    const [dataUtente, setDataUtente] = useState<DataResponseGetUtente>()

    // const location = useLocation();
    // const params = new URLSearchParams(location.search);

    // const tokenPP = params.get('tokenPP');
    // const idUt = params.get('id');

    const {id} = useParams()
    const idUt = id ? Number(id) : 0;
    console.log('tokenpp',  id)
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
            handleGetOrdini(1,);

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

    const handleGetOrdini = async (pageNumber: number,) => {
        setOpenLoading(true);
        const responseGetOrdini = await getOrdini(idUt, pageNumber);
        setListOrdini(responseGetOrdini ? responseGetOrdini.ordineList : []);
        setPageOrdini(responseGetOrdini ? responseGetOrdini?.paginationList : []);
        setOpenLoading(false);
    }



    useEffect(() => {
        handleGetOrdini(1)
    }, [])

    const handleRedirectToDetaglioOrdini = (idOrdini: number | string) => {
        //navigate('/dettaglio-lavoro')
        window.parent.postMessage({ operation: enOperationFrame.redirectDetaglioOrdini, id: idOrdini }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleRedirectToDetaglioLavoro = (idLavoro: number | string) => {
        //navigate(`/${idLavoro}/dettaglio-lavoro`)
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
    }
}

export default useITuoiOrdini