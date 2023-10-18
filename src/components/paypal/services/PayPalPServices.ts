import axios from "axios"
import { GLOBAL_CONFIG } from "../../../_config/global";
import qs from 'qs';
import { AccesTokenPP, PayPalOrder } from "../interfaces/PayPal";

export const httpGetTokenPayPal = async () => {

    const grant_type = qs.stringify({
        grant_type: "client_credentials",
    },)

    const response = await axios.post<AccesTokenPP>(
        `${GLOBAL_CONFIG.PAYPAL_API}/v1/oauth2/token`,
        grant_type,
        {
            auth: {
                username: GLOBAL_CONFIG.PAYPAL_CLIENT_ID,
                password: GLOBAL_CONFIG.PAYPAL_API_SECRET,
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );

    return response.data;
}

export const httpPostPayPalServices = async (order: PayPalOrder, accesToken: string) => {
    const response = await axios.post(`${GLOBAL_CONFIG.PAYPAL_API}/v2/checkout/orders`, order,
        {
            headers: {
                'Authorization': `Bearer ${accesToken}`,
            }
        });
    return response.data;
}

export const httpCheckOutPayPal = async (token:string) => {
    const response = await axios.post(`${GLOBAL_CONFIG.PAYPAL_API}/v2/checkout/orders/${token}/capture`, {},
        {
            auth: {
                username: GLOBAL_CONFIG.PAYPAL_CLIENT_ID,
                password: GLOBAL_CONFIG.PAYPAL_API_SECRET,
            },
        })
    return response.data;
}