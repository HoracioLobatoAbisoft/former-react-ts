import React, { useEffect, useState } from 'react'
import { DataGetNotfiche } from '../interfaces/GetNotifiche'
import { httpGetNotifiche } from '../services/CercaServices'
import { useNavigate, useParams } from 'react-router-dom'
import { GLOBAL_CONFIG } from '../../../_config/global'
import { ObjCarrello } from '../../formProdottoV1/interface/ObjCarrrello'
import { enOperationFrame } from '../../../enHelpers/enOperationFrame'

const useCerca = () => {
    const navigate = useNavigate()
    const [notifiche, setNotifiche] = useState<DataGetNotfiche>()
    const { idUt, differenzza } = useParams();
    const [carrello, setCarrello] = useState<ObjCarrello[]>([])
    const [tooltipArea, seTooltipArea] = useState(false)
    
    const handleData = async () => {
        const idUtN = Number(idUt), differenzaN = Number(differenzza)
        try {
            const petitionInitial = await Promise.all([
                httpGetNotifiche(idUtN, differenzaN, GLOBAL_CONFIG.IMG_IP),
                handleGetCarrello(),
            ]);
            const [responseNotifiche] = petitionInitial;
            setNotifiche(responseNotifiche.data);
        } catch (error) {
            throw new Error(String(error));
        }
    }

    const handleOperationFrame = (operation: enOperationFrame, uri?: string, nav?: string) => {
        window.parent.postMessage({ color: 'bg_hidden', operation: operation, uri: uri }, GLOBAL_CONFIG.IMG_IP);
        if (nav) {
            navigate(nav);
        }
    }

    const handleGetCarrello = async () => {
        const LocalCarrello = localStorage.getItem('c');
        let ArrayLocalCarrello: ObjCarrello[] = [];
        if (LocalCarrello) {
            ArrayLocalCarrello = JSON.parse(LocalCarrello);
            setCarrello(ArrayLocalCarrello);
        }
    }

    useEffect(() => {
        console.log('init')
        handleData();

        return () => {
            console.log('exit')
        }
    }, [])

    return {
        notifiche, carrello, seTooltipArea, tooltipArea,
        handleOperationFrame,
    }
}

export default useCerca