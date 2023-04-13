import React from "react";
import imgLock from "../../../assets/img/padlock.svg"
import imgShopping from "../../../assets/img/shopping.svg"
import imgAlert from "../../../assets/img/alert.svg"

const SearchOrdini = () => {
  return (
    <div className="flex justify-around items-center bg-gray-200 py-4">
      
      <form className="flex justify-center items-center">
        <p className="text-xl w-96">Cosa stai cercando?</p>
        
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block focus:outline-none w-full py-2 px-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#f58220] focus:border-[#f58220]"
            placeholder="Cercare"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-1.5 bg-[#f58220] hover:bg-[#f58220] focus:ring-4 focus:outline-none focus:ring-[#f58220] font-medium rounded-lg text-sm px-4 py-1"
          >
            Cercare
          </button>
        </div>
      </form>
      <div className="flex justify-center items-center space-x-2">
        <div className="flex justify-center items-center bg-black rounded py-2 px-2">
          <img className="h-5 w-6 p-1 text-white bg-white rounded mr-2" src={imgLock} alt="" />
          <button className="text-white uppercase font-semibold text-sm">Area Riservata</button>
        </div>
        <div className="flex justify-center items-center bg-[#d6e03d] rounded py-2 px-2">
          <img className="h-5 w-6 p-1 rounded mr-2" src={imgShopping} alt="" />
          <button className="uppercase font-semibold text-sm">Carrello</button>
        </div>
        <div className="flex justify-center items-center bg-[#d6e03d] rounded py-2 px-2 cursor-pointer">
          <img className="h-5 w-6 p-1 rounded" src={imgAlert} alt="" />
        </div>
        
        
      </div>
    </div>
  );
};

export default SearchOrdini;
