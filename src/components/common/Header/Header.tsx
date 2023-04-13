import React from "react";
import imgLogo from "../../../assets/img/logo.png";
import imgFacebook from "../../../assets/img/facebook.svg";
import imgInstagram from "../../../assets/img/instagram.svg";
import imgTwitter from "../../../assets/img/twitter.svg";
import imgYoutube from "../../../assets/img/youtube.svg";
import imgHelp from "../../../assets/img/help.svg";

const Header = () => {
  return (
    <>
      <div className=" pt-4 flex justify-around items-center">
        <img src={imgLogo} alt="" />
        <div className="text-xl">
          Benvenuto{" "}
          <span className="bg-[#009ec9] text-white">
            CF advertising di Fabrizi...
          </span>
          , <span className="text-[#009ec9] font-semibold">Esci</span>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-12 cursor-pointer h-10" src={imgFacebook} alt="" />
          <img className="w-10 cursor-pointer h-7" src={imgInstagram} alt="" />
          <img className="w-10 cursor-pointer h-7" src={imgTwitter} alt="" />
          <img className="w-10 cursor-pointer h-9" src={imgYoutube} alt="" />
          <img className="w-10 cursor-pointer h-8" src={imgHelp} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 text-gray-500">
        <p className="mr-4 ml-4 hover:text-black cursor-pointer">Area Riservata</p> |
        <p className="mr-4 ml-4 hover:text-black cursor-pointer"> I tuoi Ordini</p> |
        <p className="mr-4 ml-4 hover:text-black cursor-pointer"> I tuoi Lavori</p> |
        <p className="mr-4 ml-4 hover:text-black cursor-pointer"> I tuoi Coupon di Sconto</p> |
        <p className="mr-4 ml-4 hover:text-black cursor-pointer"> Le tue Recensioni</p> |
        <p className="mr-4 ml-4 hover:text-black cursor-pointer"> Contattaci</p> 
      </div>
    </>
  );
};

export default Header;
