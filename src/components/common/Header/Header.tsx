import React, { useState } from "react";
import imgLogo from "../../../assets/img/logo.png";
import imgFacebook from "../../../assets/img/facebook.svg";
import imgInstagram from "../../../assets/img/instagram.svg";
import imgTwitter from "../../../assets/img/twitter.svg";
import imgYoutube from "../../../assets/img/youtube.svg";
import imgHelp from "../../../assets/img/help.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-gray-200 py-2.5 w-full">
        <div className="flex justify-between  items-center w-full relative">
          <a href="#" className="flex items-center ml-10">
            <img
              src={imgLogo}
              className="mr-3 w-56 2xl:w-auto"
              alt="Flowbite Logo"
            />
          </a>
          <div className="flex items-center mr-4 ">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* header responsive */}
          {open && (
            <div
              className="block absolute top-12 z-50 bg-white justify-between items-center w-full lg:hidden"
              id="mobile-menu-2"
            >
              <ul className="block  z-50 mt-4 font-medium px-4 pt-4">
                <Link
                  to="/"
                  className="cursor-pointer block py-2 px-2 hover:bg-[#f58220] hover:text-white"
                >
                  Area Riservata
                </Link>{" "}
                <Link
                  to="/nav"
                  className="cursor-pointer block py-2 px-2 hover:bg-[#f58220] hover:text-white"
                >
                  {" "}
                  Le tue consegne
                </Link>{" "}
                <Link
                  to="/lavori"
                  className="cursor-pointer block py-2 px-2 hover:bg-[#f58220] hover:text-white"
                >
                  {" "}
                  I tuoi Lavori
                </Link>{" "}
                <Link
                  to=""
                  className="cursor-pointer block py-2 px-2 hover:bg-[#f58220] hover:text-white"
                >
                  {" "}
                  I tuoi Coupon di Sconto
                </Link>{" "}
                <Link
                  to=""
                  className="cursor-pointer block py-2 px-2 hover:bg-[#f58220] hover:text-white"
                >
                  {" "}
                  Le tue Recensioni
                </Link>{" "}
                <Link
                  to=""
                  className="cursor-pointer block py-2 px-2 hover:bg-[#f58220] hover:text-white"
                >
                  {" "}
                  Contattaci
                </Link>
                <div className="flex justify-center items-center">
                  <img
                    className="w-12 cursor-pointer h-10"
                    src={imgFacebook}
                    alt=""
                  />
                  <img
                    className="w-10 cursor-pointer h-7"
                    src={imgInstagram}
                    alt=""
                  />
                  <img
                    className="w-10 cursor-pointer h-7"
                    src={imgTwitter}
                    alt=""
                  />
                  <img
                    className="w-10 cursor-pointer h-9"
                    src={imgYoutube}
                    alt=""
                  />
                  <img
                    className="w-10 cursor-pointer h-8"
                    src={imgHelp}
                    alt=""
                  />
                </div>
                <div className="flex justify-center space-x-2">
                  <Link
                    to="/Register"
                    className="text-[#f58220] font-semibold mr-2"
                  >
                    Registrati
                  </Link>{" "}
                  o{" "}
                  <Link to="/Login" className="text-[#f58220] font-semibold">
                    Accedi
                  </Link>
                </div>
              </ul>
            </div>
          )}

          {/* header full screen */}
          <div
            className="hidden justify-between items-center w-full lg:block lg:w-auto "
            id="mobile-menu-2"
          >
            <div className="flex justify-center">
              <ul className=" mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
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
              </ul>
            </div>

            <div className="flex justify-center items-center mt-4 text-gray-500">
              <Link
                to="/"
                className="mr-4 ml-4 hover:text-black cursor-pointer"
              >
                Area Riservata
              </Link>{" "}
              |
              <Link
                to="/nav"
                className="mr-4 ml-4 hover:text-black cursor-pointer"
              >
                {" "}
                Le tue consegne
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
          </div>
          <div className="lg:flex mr-4 hidden justify-center items-center">
            <img
              className="w-12 cursor-pointer h-10"
              src={imgFacebook}
              alt=""
            />
            <img
              className="w-10 cursor-pointer h-7"
              src={imgInstagram}
              alt=""
            />
            <img className="w-10 cursor-pointer h-7" src={imgTwitter} alt="" />
            <img className="w-10 cursor-pointer h-9" src={imgYoutube} alt="" />
            <img className="w-10 cursor-pointer h-8" src={imgHelp} alt="" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
