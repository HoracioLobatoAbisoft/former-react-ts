export interface AccesTokenPP {
    scope: string,
    access_token: string,
    token_type: string,
    app_id: string,
    expires_in: number,
    nonce: string
}
export interface PayPalOrder {
    intent: "CAPTURE" | "AUTHORIZE";
    purchase_units: purchaseUnits[];
    application_context: ApplicationContextPayPal;
}
export interface purchaseUnits{
    reference_id?: string | undefined;
    amount: amountPayPal;
}
export interface amountPayPal {
    currency_code: string;
    description?: string;
    value: string;
}

export interface ApplicationContextPayPal {
    brand_name:string;
    landing_page: "LOGIN" | "BILLING" | "NO_PREFERENCE";
    user_action: "CONTINUE" | "PAY_NOW";
    return_url: string;
    cancel_url:string;
}