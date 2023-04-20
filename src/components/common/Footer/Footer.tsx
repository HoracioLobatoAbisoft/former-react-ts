import React from 'react'
import imgPaypal from "../../../assets/img/paypal.svg";
import imgVisa from "../../../assets/img/visa.svg";
import imgMasterCard from "../../../assets/img/mastercard.svg";
import imgPostePay from "../../../assets/img/postepay.svg";
import imgQuestion from "../../../assets/img/question.svg";
function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="flex flex-col md:flex-row justify-between mx-auto px-4 py-8">
                {/* Columnas izquierdas */}
                <div className="flex mb-6 md:mb-0 ms-10">
                    <div className="flex-1 mr-4">
                        <h3 className="text-lg text-[#f58220] font-bold mb-2">Tipografia FORMER</h3>
                        <ul className="list-none list-inside mb-4">
                            <li>La Nostra Azienda</li>
                            <li>Il Nostro Parco Macchine</li>
                            <li>Contattaci</li>
                            <li>Richiedi i codici di accesso</li>
                            <li>Diventa Rivenditore</li>
                        </ul>
                    </div>
                    <div className="flex-1 mr-4 border-l-2 border-gray-300 pl-4">
                        <h3 className="text-lg text-[#f58220] font-bold mb-2">Il mondo FORMER</h3>
                        <ul className="list-none list-inside mb-4">
                            <li>Il Mondo Former</li>
                            <li>Stampa Tipografica Offset</li>
                            <li>Stampa Digitale</li>
                            <li>Ricamo</li>
                            <li>Packaging</li>
                        </ul>
                    </div>
                    <div className="flex-1 border-l-2 border-gray-300 pl-4">
                        <h3 className="text-lg text-[#f58220] font-bold mb-2">Ed ancora...</h3>
                        <ul className="list-none list-inside">
                            <li>Glossario Tipografico</li>
                            <li>Vuoi creare file perfetti?</li>
                            <li>Privacy</li>
                            <li>Scarica Google Chrome</li>
                        </ul>
                    </div>
                </div>


                {/* Logo en el centro */}
                <div className="flex flex-col items-center mb-6 md:mb-0">
                    <img
                        src="src\assets\img\logo.png"
                        alt="Logo"
                        className="h-auto max-h-50 object-contain mb-4"
                    />
                    <p className="text-sm text-center mb-4">
                        <strong>STABILIMENTO E UFFICI: </strong>Via Cassia, 2010 - 00123 Roma - P.IVA
                        14974961006 - Tutti i diritti riservati, vietata la riproduzione
                        anche parziale.<br />
                        <strong>SERVIZIO CLIENTI: </strong>06.30884518 - 06.30884057 Dal Lunedì al Venerdì,
                        con orario continuato 8.30-19.00, <span className='text-[#e87a23]'>info@tipografiaformer.it</span>
                    </p>
                    <div className="flex justify-center space-x-4">
                        <img className="h-20 w-25 me-5" src={imgPaypal} alt="" />
                        <img className="h-20 w-25 me-5" src={imgVisa} alt="" />
                        <img className="h-20 w-25 me-5" src={imgMasterCard} alt="" />
                        <img className="h-20 w-25 me-5" src={imgPostePay} alt="" />
                    </div>
                </div>
                {/* Botón Ayuda en la derecha */}
                <div className="flex flex-col justify-end">
                    <div className='me-5'>
                        <button className="bg-[#f58220] text-[#522F10] font-bold py-2 px-4 rounded inline-flex items-center">
                            <img className="h-8 w-8 me-1" src={imgQuestion} alt="" />
                            <span>Ayuda</span>
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer