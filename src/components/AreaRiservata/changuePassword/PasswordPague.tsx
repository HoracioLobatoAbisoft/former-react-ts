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
        <div className="p-4  w-full mt-10 ml-10">
          <div className="flex items-center mb-4">
            <img className="h-8 w-8 mr-4" src={imgPassword} alt="" />
            <h2 className="text-[#f58220] font-semibold uppercase">
              MODIFICA PASSWORD
            </h2>
          </div>
          <div className="mt-10">
            <div className="mt-4">
              <label htmlFor="">Immetti la nuova password *</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 mt-2.5 h-ful w-10 text-gray-400">
                  <i className="fas fa-user text-[#f58220]"></i>
                </div>
                <input
                  type="text"
                  className="text-sm placeholder-gray-500 pl-4 pr-4 rounded-2xl border border-gray-400 w-72 py-2 focus:outline-none focus:border-[#f58220]"
                  
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="">E riscrivi la nuova Password *</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 mt-2.5 h-ful w-10 text-gray-400">
                  <i className="fas fa-user text-[#f58220]"></i>
                </div>
                <input
                  type="text"
                  className="text-sm placeholder-gray-500 pl-4 pr-4 rounded-2xl border border-gray-400 w-72 py-2 focus:outline-none focus:border-[#f58220]"
                  
                />
              </div>
            </div>
            <button className="w-44 mt-4  items-center bg-[#f58220] pr-2 py-2 pl-6 text-white rounded-md">
              salva la password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordPague;
