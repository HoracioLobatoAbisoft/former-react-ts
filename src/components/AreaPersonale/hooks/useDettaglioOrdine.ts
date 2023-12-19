import { useLocation, useParams } from "react-router-dom";
import { httpDeleteLavoro, httpGetOrdiniById } from "../services/OrdiniServices";
import { useEffect, useState } from "react";
import { DataGetOrdiniById } from "../Interfaces/GetOrdiniById";
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";
import { GLOBAL_CONFIG } from "../../../_config/global";
import { httpGetTokenPayPal, httpPostPayPalServices } from "../../paypal/services/PayPalPServices";
import { PayPalOrder, amountPayPal, purchaseUnits } from "../../paypal/interfaces/PayPal";

const useDettaglioOrdine = () => {

    const { idConsegna, tokenPP } = useParams()

    //console.log('tokenppDO',tokenPP)
    const [ordiniData, setOrdiniData] = useState<DataGetOrdiniById>()
    const [openloadingBackdrop, setOpenloadingBackdrop] = useState(false)
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
        setOpenloadingBackdrop(true)
        if (idConsegna) {
            const response = await getOrdiniById(Number(idConsegna));
            setOrdiniData(response)
            setOpenloadingBackdrop(false)
        }
    }

    const handleRedirectToDetaglioOrdini = (idOrdini: number | string) => {
        window.parent.postMessage({ operation: enOperationFrame.redirectDetaglioOrdini, id: idOrdini }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleRedirectToDetaglioLavoro = (idLavoro: number | string) => {
        //console.log(idLavoro)
        window.parent.postMessage({ operation: enOperationFrame.redirectDetaglioLavoro, id: idLavoro }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleNewTagListinoTemplate = (path: number | string) => {
        window.parent.postMessage({ operation: enOperationFrame.newTagListinoTemplate, path: path }, GLOBAL_CONFIG.IMG_IP);
    }

    const handleDeleteLavoro = (idLavoro: number | string) => {
        deleteLavoro(idLavoro);
    }

    const handleOrdineData = () => {
        if (ordiniData === undefined) return []
        if (ordiniData.listLavori === undefined) return []
        if (ordiniData.listLavori.length === 0) return []
        const listLavori: purchaseUnits[] = ordiniData?.listLavori.map((item, i) => {

            const amountList: amountPayPal = {
                value: String(item.importoNetto),
                currency_code: 'EUR',
                description: item.title,
                
            }

            return {
                amount: amountList,
                reference_id: String(i),
            }
        })
        return listLavori
    }

    /*
        *!!_______!!!__________PayPal___________!!!_________ 
    */

    const handleTokenAuth = async () => {
        console.log('aca esta')
        try {
            setOpenloadingBackdrop(true);
            const products: purchaseUnits[] = handleOrdineData();

            const order: PayPalOrder = {
                intent: "CAPTURE",
                purchase_units: products,
                application_context: {
                    brand_name: 'Tipografia Former',
                    landing_page: 'NO_PREFERENCE',
                    cancel_url: `${GLOBAL_CONFIG.IMG_IP}/pagamento-non-confermato-paypal`,
                    user_action: "PAY_NOW",
                    return_url: `${GLOBAL_CONFIG.IMG_IP}/pagamento-confermato-paypal`,
                }
            }

            const responsePayPalToken = await httpGetTokenPayPal();
            if (responsePayPalToken) {
                const responsePayPal = await httpPostPayPalServices(order, responsePayPalToken.access_token)
                if (responsePayPal.status === "CREATED") {
                    window.parent.postMessage({ operation: enOperationFrame.redirectOtherUri, uri: responsePayPal.links[1].href }, GLOBAL_CONFIG.IMG_IP);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleDataOrdiniById();

    }, [])


    return {
        ordiniData,
        handleRedirectToDetaglioOrdini,handleRedirectToDetaglioLavoro,
        handleNewTagListinoTemplate,
        handleDeleteLavoro,
        handleTokenAuth,
        openloadingBackdrop
    }
}

export default useDettaglioOrdine