import React from 'react'
import usePayPal from '../hooks/usePayPal'

const PayPalOk = () => {

    const { } = usePayPal();

    return (
        <div className='w-full h-full text-[11px] font-[Arial]'>
            <span className="bg-[#009ec9] font-bold uppercase px-[2px] h-full rounded text-white text-[1.2em]">React V^18.2.0</span>
            <center><h2 className='text-[1.8em] font-semibold'>Pagamento effettuato correttamente!</h2></center> <br />
            Il tuo pagamento è stato effettuato in maniera corretta! <br /><br />A breve riceverai tramite email una conferma del pagamento da PayPal.<br /><br />
            Grazie,<br /><b>Lo staff Tipografia Former</b><br /><br />
        </div>
    )
}

export default PayPalOk