import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import LoginService from "../services/LoginService";
import imgLogo from "../assets/img/logo.png"
import UtentiComponent from "./UtentiComponent";

const LoginForm = () => {
  const { register, handleSubmit, watch, formState: { errors }, } = useForm();

  const [showUtenti, setShowUtenti] = useState(false)

  const onSubmit = (data: any) => {
    console.log(data);

    LoginService.postUser(data).then((res) => {
      console.log(res)
      localStorage.setItem("token",res?.data.token);
      
      setShowUtenti(true)
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <form
          className="border rounded-md px-10 py-10 bg- w-[500px] bg-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-center">
            <img src={imgLogo} alt="" />
          </div>
          <div>
            <p className="text-[#f58220] text-xl font-semibold text-center mt-2">Sei già registrato? Accedi</p>
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

          <button
            type="submit"
            className="flex mt-4 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-[#f58220] hover:bg-blue-6 rounded-2xl py-2 w-full transition duration-150 ease-in"
          >
            Accedi
          </button>
        </form>
      </div>


      <div>
        { showUtenti && <UtentiComponent></UtentiComponent> }
        
      </div>
    </>
  );
};

export default LoginForm;
