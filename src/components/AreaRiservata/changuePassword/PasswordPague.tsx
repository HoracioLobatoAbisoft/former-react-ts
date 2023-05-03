import React from "react";
import imgPassword from "../../../assets/img/password.svg";
import SideBarPersonalArea from "../../common/SideBarPersonalArea/SideBarPersonalArea";
import Header from "../../common/Header/Header";
import SearchOrdini from "../../ordini/components/SearchOrdini";
import NewsLatter from "../../common/newsLatter/NewsLatter";

const PasswordPague = () => {
  return (
    <>
      <Header />
      <SearchOrdini />
      <div className="flex">
        <SideBarPersonalArea />
        <div className="ms-4 p-5 lg:ms-0 lg:p-0 flex items-center justify-start w-full flex-col mt-20">
          <form className="bg-white w-auto  h-auto flex flex-col items-start gap-[2rem]">
            <h2 className="lg:w-full w-72 bg-[#f58220] text-white font-bold p-2 uppercase tracking-wider rounded"> Modifica Password</h2>
            <div className="font-semibold lg:flex  items-center w-full">
              <label  className="w-full block">Immentti la nouva password</label>
              <input type="text"  className="w-[70%] border rounded-md focus:border-[#f58220] lg:w-full mt-4 lg:mt-0 mr-4 p-3 focus:outline-none"/>
            </div>
            <div className="font-semibold lg:flex w-full items-center">
              <label  className="w-full block">Riscrivi la nouva password</label>
              <input type="password"  className="w-[70%] border rounded-md focus:border-[#f58220] mr-4 lg:w-full mt-4 lg:mt-0 p-3 focus:outline-none" />
            </div>
            <button type="submit" className="flex-grow-0 text-white bg-[#f58220] font-semibold px-5 py-3 rounded">Salva la password</button>
            <h4 className="font-bold italic">Attenzione <span className="font-normal tracking-wider"> Le Password denovo essere di almeno 8 caratteri e denovo contenere almeno un numero</span></h4>
          </form>
          <button className="mt-10 flex-grow-0 text-white bg-[#f58220] font-semibold px-5 py-3 rounded">Esci</button>
           <NewsLatter />
        </div>
        
      </div>
     
    </>
  );
};

export default PasswordPague;
