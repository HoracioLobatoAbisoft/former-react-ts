import React from "react";
import imgPaypal from "../../../assets/img/paypal.svg";
import imgVisa from "../../../assets/img/visa.svg";
import imgMasterCard from "../../../assets/img/mastercard.svg";
import imgPostePay from "../../../assets/img/postepay.svg";
import imgFacebook from "../../../assets/img/icons8-facebook-nuevo-48.png";
import imgInstagram from "../../../assets/img/icons8-instagram-48.png";
import imgTwitter from "../../../assets/img/icons8-twitter-48.png";
import imgYoutube from "../../../assets/img/icons8-youtube-48.png";
import imgHelp from "../../../assets/img/icons8-ayuda-48.png";
import imgQuestion from "../../../assets/img/question.svg";
import imgLogo from "../../../assets/img/logo.png";

function Footer() {
  return (
    <footer className="bg-[#444141] text-white mt-auto ">
      <div className="flex flex-col lg:flex-row justify-around mx-auto px-4 py-8">
        {/* Columnas izquierdas */}
        <div className="flex flex-col items-center mb-6 md:mb-0 mt-4 lg:mt-0">
          <img
            src={imgLogo}
            alt="Logo"
            className="h-auto max-h-50 object-contain mb-4"
          />
          <div className="flex mr-4 justify-center items-center">
            <img
              className="w-11 cursor-pointer h-10"
              src={imgFacebook}
              alt=""
            />
            <img
              className="w-11 cursor-pointer h-10"
              src={imgInstagram}
              alt=""
            />
            <img className="w-11 cursor-pointer h-10" src={imgTwitter} alt="" />
            <img className="w-11 cursor-pointer h-10" src={imgYoutube} alt="" />
            <img className="w-11 cursor-pointer h-10" src={imgHelp} alt="" />
          </div>
        </div>
        <div className="flex space-x-4 mb-6 md:mb-0 ms-10">
          <div className="flex-1 mr-4">
            <h3 className="text-lg text-[#f58220] font-bold mb-2">
              Tipografia FORMER
            </h3>
            <ul className="list-none list-inside mb-4">
              <li>La Nostra Azienda</li>
              <li>Il Nostro Parco Macchine</li>
              <li>Contattaci</li>
              <li>Richiedi i codici di accesso</li>
              <li>Diventa Rivenditore</li>
            </ul>
          </div>
          <div className="flex-1 mr-4 border-l-2 border-gray-300 pl-4">
            <h3 className="text-lg text-[#f58220] font-bold mb-2">
              Il mondo FORMER
            </h3>
            <ul className="list-none list-inside mb-4">
              <li>Il Mondo Former</li>
              <li>Stampa Tipografica Offset</li>
              <li>Stampa Digitale</li>
              <li>Ricamo</li>
              <li>Packaging</li>
            </ul>
          </div>
          <div className="flex-1 border-l-2 border-gray-300 pl-4">
            <h3 className="text-lg text-[#f58220] font-bold mb-2">
              Ed ancora...
            </h3>
            <ul className="list-none list-inside">
              <li>Glossario Tipografico</li>
              <li>Vuoi creare file perfetti?</li>
              <li>Privacy</li>
              <li>Scarica Google Chrome</li>
            </ul>
          </div>
        </div>

        {/* Logo en el centro */}
        

        {/* Botón Ayuda en la derecha */}
        {/* <div className="flex flex-col justify-end">
          <div className="me-5">
            <button className="bg-[#f58220] text-[#522F10] font-bold py-2 px-4 rounded inline-flex items-center">
              <img className="h-8 w-8 me-1" src={imgQuestion} alt="" />
              <span>Ayuda</span>
            </button>
          </div>
        </div> */}
      </div>
      <p className="text-sm text-center mb-4">
        STABILIMENTO E UFFICI: Via Cassia, 2010 - 00123 Roma -
        P.IVA 14974961006 - Tutti i diritti riservati, vietata la riproduzione
        anche parziale.
        <br />
        SERVIZIO CLIENTI: 06.30884518 - 06.30884057 Dal Lunedì
        al Venerdì, con orario continuato 8.30-19.00,{" "}
        <span className="text-[#e87a23]">info@tipografiaformer.it</span>
      </p>
      <div className="flex justify-center space-x-4">
        <img className="h-20 w-25 me-5" src={imgPaypal} alt="" />
        <img className="h-14 w-25 me-5 mt-3" src={imgVisa} alt="" />
        <img className="h-20 w-25 me-5" src={imgMasterCard} alt="" />
        <img className="h-20 w-25 me-5" src={imgPostePay} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
