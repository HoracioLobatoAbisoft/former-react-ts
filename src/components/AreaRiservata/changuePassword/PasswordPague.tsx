import React, { useState } from "react";
import imgPassword from "../../../assets/img/password.svg";
import SideBarPersonalArea from "../../common/SideBarPersonalArea/SideBarPersonalArea";
import Header from "../../common/Header/Header";
import SearchOrdini from "../../ordini/components/SearchOrdini";
import NewsLatter from "../../common/newsLatter/NewsLatter";
import imgEyeOff from "../../../assets/img/eye-off.svg";
import imgEyeOn from "../../../assets/img/eye-on.svg";

const PasswordPague = () => {
  

  return (
    <>
      <Header />
      <SearchOrdini />
      <div className="flex gap-20">
        <SideBarPersonalArea />
        <div className="ms-4 p-5 lg:ms-0 lg:p-0 flex items-start justify-start w-full flex-col mt-20">
          <form className="bg-white w-auto  h-auto flex flex-col items-start gap-[2rem]">
            <h2 className="lg:w-full w-72 bg-[#f58220] text-white font-bold text-lg p-2 uppercase  rounded"> Modifica Password</h2>
            <div className="font-semibold lg:flex  items-center w-full">
              <label  className="w-full block text-lg font-bold">Imetti la nuova password</label>
              <input type="text"  className="w-[70%] border rounded-md focus:border-[#f58220] lg:w-full mt-4 lg:mt-0 mr-4 p-3 focus:outline-none"/>
            </div>
            <div className="font-semibold lg:flex w-full items-center">
              <label  className="w-full block text-lg font-bold">Riscrivi la nuova password</label>
              <input type="password"  className="w-[70%] border rounded-md focus:border-[#f58220] mr-4 lg:w-full mt-4 lg:mt-0 p-3 focus:outline-none" />
            </div>
            <button type="submit" className="flex-grow-0 text-white bg-[#f58220] px-5 py-3 rounded text-lg font-bold">Salva la password</button>
            <h4 className="font-bold italic text-xl">Attenzione: <span className="font-normal tracking-wider"> Le Password devono essere di almeno 8 caratteri e devono contenere almeno un numero</span></h4>
          </form>
          <button className="mt-10 flex-grow-0 text-white bg-[#f58220] font-semibold px-5 py-3 rounded text-lg">Esci</button>
           <NewsLatter />
        </div>

       
      </div>
    </>
  );
};

export default PasswordPague;
