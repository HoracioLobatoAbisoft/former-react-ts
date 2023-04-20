import React from "react";
import imgLogo from "../../../assets/img/logo.png";
import imgFacebook from "../../../assets/img/facebook.svg";
import imgInstagram from "../../../assets/img/instagram.svg";
import imgTwitter from "../../../assets/img/twitter.svg";
import imgYoutube from "../../../assets/img/youtube.svg";
import imgHelp from "../../../assets/img/help.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" pt-4 flex justify-around items-center">
        <img src={imgLogo} alt="" />
        <div className="text-xl">
          Benvenuto Visitatore,
          <Link to="/Register" className="text-[#f58220] font-semibold">
            Registrati
          </Link>{" "}
          o{" "}
          <Link to="/Login" className="text-[#f58220] font-semibold">
            Accedi
          </Link>
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
        <Link to="/" className="mr-4 ml-4 hover:text-black cursor-pointer">
          Area Riservata
        </Link>{" "}
        |
        <Link to="/nav" className="mr-4 ml-4 hover:text-black cursor-pointer">
          {" "}
          le tue consegne
        </Link>{" "}
        |
        <Link
          to="/lavori"
          className="mr-4 ml-4 hover:text-black cursor-pointer"
        >
          {" "}
          I tuoi Lavori
        </Link>{" "}
        |
        <Link to="" className="mr-4 ml-4 hover:text-black cursor-pointer">
          {" "}
          I tuoi Coupon di Sconto
        </Link>{" "}
        |
        <Link to="" className="mr-4 ml-4 hover:text-black cursor-pointer">
          {" "}
          Le tue Recensioni
        </Link>{" "}
        |
        <Link to="" className="mr-4 ml-4 hover:text-black cursor-pointer">
          {" "}
          Contattaci
        </Link>
      </div>
    </>
  );
};

export default Header;
