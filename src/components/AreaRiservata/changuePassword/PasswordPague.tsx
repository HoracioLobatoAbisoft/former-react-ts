import React from "react";
import imgPassword from "../../../assets/img/password.svg";
import SideBarPersonalArea from "../../common/SideBarPersonalArea/SideBarPersonalArea";
import Header from "../../common/Header/Header";
import SearchOrdini from "../../ordini/components/SearchOrdini";

const PasswordPague = () => {
  return (
    <>
      <Header />
      <SearchOrdini />
      <div className="flex">
        <SideBarPersonalArea />
        <div className="ms-4 p-5 flex items-center justify-start w-full flex-col">
          <form className="bg-white  w-[40rem] h-auto flex flex-col items-start gap-[2rem]">
            <h2 className="w-full bg-[#f58220] text-white font-bold p-2 uppercase tracking-wider rounded"> Modifica Password</h2>
            <div className="font-semibold flex items-center w-full">
              <label  className="w-full">Immentti la nouva password</label>
              <input type="text"  className="bg-[#e8e8e8] w-full mr-4 p-3 focus:outline-none"/>
            </div>
            <div className="font-semibold flex items-center w-full">
              <label  className="w-full">Riscrivi la nouva password</label>
              <input type="password"  className="bg-[#e8e8e8] w-full mr-4 p-3 focus:outline-none" />
            </div>
            <button type="submit" className="flex-grow-0 text-white bg-[#f58220] font-semibold px-5 py-3 rounded">Salva la password</button>
            <h4 className="font-bold italic">Attenzione <span className="font-normal tracking-wider"> Le Password denovo essere di almeno 8 caratteri e denovo contenere almeno un numero</span></h4>
          </form>
          <button className="mt-10 flex-grow-0 text-white bg-[#f58220] font-semibold px-5 py-3 rounded">Esci</button>
        </div>
      </div>
    </>
  );
};

export default PasswordPague;
