import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { httpCheckOutPayPal } from '../services/PayPalPServices';

const usePayPal = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const tokenPP = params.get('tokenPP');

    /*
        *!----------!!!------ Pay Pal--------- !!!-----! 
    */

    const handleCheackOutPayPal = async () => {
        if (tokenPP != null || tokenPP != undefined) {
            const responseCheckOutPayPal = await httpCheckOutPayPal(tokenPP);
        }
    }

    useEffect(() => {
        handleCheackOutPayPal();
    }, [])


    return {}
}

export default usePayPal