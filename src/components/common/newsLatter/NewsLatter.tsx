import React from 'react'
import imgContacto from "../../../assets/img/imagen-contacto.png";
import { Link } from "react-router-dom";

const NewsLatter = () => {
  return (
    <div className="p-8 bg-white mt-20 rounded-md shadow-2xl lg:flex justify-around items-center w-full">
      <div className="">
        <img className="w-92 h-56 " src={imgContacto} alt="" />
      </div>
    
    <div className="mt-4 lg:mt-0">
      <p className="text-[#e87a23] text-4xl font-semibold">
        Inscrivitti alla{" "}
      </p>
      <p className="text-[#e87a23] text-4xl font-semibold">
        nostra Newsletter
      </p>
      <div className="flex space-x-2 items-center mt-4">
        <input
          type="text"
          className="text-sm placeholder-gray-500 pl-4 pr-4 rounded-md border border-gray-400 w-56 py-2 focus:outline-none focus:border-[#f58220]"
          placeholder="Insirisci la tua email"
        />
        <Link
          to="/Register"
          className="flex  items-center justify-center px-10 focus:outline-none text-white text-sm sm:text-base bg-[#f58220] rounded-2xl py-2 transition duration-150 ease-in"
        >
          Registrati
        </Link>
      </div>
      <div className="flex items-center mb-4 mt-2">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:border-[#f58220]"
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Consento al trattamento dei miei dati personali{" "}
          <span className="text-[#f58220]">
            Leggi l'informativa sulla privacy
          </span>
        </label>
      </div>
    </div>
  </div>
  )
}

export default NewsLatter