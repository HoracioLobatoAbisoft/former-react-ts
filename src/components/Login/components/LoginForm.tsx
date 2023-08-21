import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginService from "../../../services/LoginService";
import imgPassword from "../../../assets/img/icon-close.png";
import imgEditWhite from "../../../assets/img/editar-white.png";
import NewsLatter from "../../common/newsLatter/NewsLatter";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    //console.log(data);

    LoginService.postUser(data).then((res) => {
      //console.log(res);
      // localStorage.setItem("token", res?.data.token);
      if (res?.data.token) {
      }
    });
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <form
          className="border rounded-md px-10 py-10 bg- w-[600px] bg-[#E8E8E8]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <p className="text-white -ml-2 px-2 py-2 rounded-md bg-[#f58220] text-xl font-semibold mt-2">
              Sei già registrato? Accedi
            </p>
            <p className="mt-2 text-lg font-bold">
              Accedi alla tua area riservata
            </p>
            <p className="mt-2 text-lg font-semibold">
              Immettere la tua ID di accesso o la tua Email e la tua Password
            </p>
          </div>
          <div className="mt-4 lg:flex">
            <label className="w-44" htmlFor="exampleInputEmail1">ID di Accesso/Email</label>
            <div className="relative">
              <input
                type="email"
                className="text-sm lg:w-72 placeholder-gray-500 pl-4 pr-4 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
                placeholder="Enter email"
                {...register("id", { required: true })}
              />
            </div>
          </div>
          <div className="mt-4 lg:flex">
            <label className="w-44">Password</label>
            <div className="relative">
              <input
                type="password"
                className="text-sm lg:w-72 placeholder-gray-500 pl-4 pr-4 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-[#f58220]"
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
          <div className="flex justify-center  items-center">
            <div className="flex justify-center items-center bg-[#f58220] pr-6 pl-4 rounded-md">
              <img className="h-10 w-8 pt-2" src={imgPassword} alt="" />
              <button
                type="submit"
                className="flex items-center justify-center font-semibold uppercase focus:outline-none text-white text-sm sm:text-base bg-[#f58220] rounded-md py-2  transition duration-150 ease-in"
              >
                Accedi
              </button>
            </div>
          </div>

          <div className=" flex items-center space-x-2 mt-4">
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
      <div className="flex justify-center mt-10">
        <div className="border rounded-md px-10 py-10 bg- w-[600px] bg-[#E8E8E8]">
          <div>
            <p className="text-white -ml-2 px-2 py-2 rounded-md bg-[#f58220] text-xl font-semibold mt-2">
              Non sei ancora registrato?
            </p>
            <p className="mt-2 text-lg font-bold">
              Registrati ora! E' veloce e facile
            </p>
            <p className="mt-2 text-lg font-semibold">
              Potrai accedere a tutte le funzionalità riservate ai nostri utenti
            </p>
          </div>
          <div className="mt-4">
            <div className="flex justify-center  items-center">
              <div className="flex justify-center items-center bg-[#f58220] pr-6 pl-4 rounded-md">
                <img className="h-10 w-8 pt-2" src={imgEditWhite} alt="" />
                <Link
                to="/Register"
                  type="submit"
                  className="flex items-center justify-center font-semibold uppercase focus:outline-none text-white text-sm sm:text-base bg-[#f58220] rounded-md py-2  transition duration-150 ease-in"
                >
                  Registrati
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLatter />
    </>
  );
};

export default LoginForm;
