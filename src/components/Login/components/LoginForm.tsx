import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginService from "../../../services/LoginService";
import imgLogo from "../../../assets/img/logo.png";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);

    LoginService.postUser(data).then((res) => {
      console.log(res);
      localStorage.setItem("token", res?.data.token);
      if (res?.data.token) {
      }
    });
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <form
          className="border rounded-md px-10 py-10 bg- w-[600px] bg-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-center">
            <img src={imgLogo} alt="" />
          </div>
          <div>
            <p className="text-[#f58220] text-xl font-semibold text-center mt-2">
              Sei già registrato? Accedi
            </p>
          </div>
          <div className="mt-4">
            <label htmlFor="exampleInputEmail1">ID di Accesso/Email</label>
            <div className="relative">
              <div className="inline-flex items-center justify-center absolute left-0 top-0 mt-2.5 h-ful w-10 text-gray-400">
                <i className="fas fa-user text-[#f58220]"></i>
              </div>
              <input
                type="email"
                className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                placeholder="Enter email"
                {...register("id", { required: true })}
              />
            </div>
          </div>
          <div className="mt-4">
            <label>Password</label>
            <div className="relative">
              <div className="inline-flex items-center justify-center absolute mt-2.5 left-0 top-0 h-ful w-10 text-gray-400">
                <i className="fas fa-lock text-[#f58220]"></i>
              </div>
              <input
                type="password"
                className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                id="exampleInputPassword1"
                placeholder="Password"
                {...register("chiave", { required: true })}
              />
            </div>
          </div>
          <div className="flex items-center my-4">
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:border-[#f58220]"
            />
            <label htmlFor="checked-checkbox" className="ml-2 text-sm">
              Resta connesso (Deseleziona questa casella se utilizzi un computer
              condiviso)
            </label>
          </div>

          <button
            type="submit"
            className="flex mt-4 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-[#f58220] rounded-2xl py-2 w-full transition duration-150 ease-in"
          >
            Accedi
          </button>

          <div className="mt-4 flex space-x-2 items-center">
            <p>
              <span className="font-semibold">Non sei ancora registrato?</span>
            </p>
            <div className="flex justify-center">
              <Link
                to="/Register"
                className="flex font-semibold items-center justify-center focus:outline-none hover:underline text-sm sm:text-base text-[#f58220] rounded-2xl py-2 transition duration-150 ease-in"
              >
                Registrati
              </Link>
            </div>
          </div>
          <div className=" flex items-center space-x-2">
            <p>
              <span className="font-semibold">Password dimenticata?</span>
            </p>
            <div className="flex justify-center">
              <Link
                to="/PassDimenticata"
                className="flex font-semibold items-center justify-center focus:outline-none hover:underline text-sm sm:text-base text-[#f58220] rounded-2xl py-2 transition duration-150 ease-in"
              >
                Rigenera
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-10 flex justify-center">
        <div>
          <p>
            <span className="font-semibold">Sei un Rivenditore? </span>
            Sei un operatore arti grafiche? Un creativo? Hai una tipografia?
            Scegli un partner affidabile
          </p>
          <div className="flex justify-center">
            <Link
              to="/Register"
              className="flex px-8 font-semibold items-center justify-center focus:outline-none hover:underline text-sm sm:text-base text-[#f58220] rounded-2xl py-2 transition duration-150 ease-in"
            >
              Listino Riservato
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex space-x-2 items-center">
          <p className="">
            Iscriviti alla nostra
            <span className="font-semibold"> Newsletter</span>
          </p>
          <input
            type="email"
            className="text-sm placeholder-gray-500 px-4 rounded-2xl border border-gray-400 py-2 focus:outline-none focus:border-[#f58220]"
            placeholder="Inserisci la tua email"
          />
        </div>
      </div>
      <div className="flex items-center justify-center my-4">
        <input
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:border-[#f58220]"
        />
        <label htmlFor="checked-checkbox" className="ml-2 text-sm">
          Consento al trattamento dei miei dati personali
        </label>
      </div>
      <div className="flex justify-center mb-4">
        <button
          type="submit"
          className="flex mt-4 items-center justify-center px-8 focus:outline-none text-white text-sm sm:text-base bg-[#f58220] rounded-2xl py-2 transition duration-150 ease-in"
        >
          Registrati alla newsletter
        </button>
      </div>
      
    </>
  );
};

export default LoginForm;
