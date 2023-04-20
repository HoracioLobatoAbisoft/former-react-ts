import React from "react";
import Header from "../../common/Header/Header";
import SearchOrdini from "../../ordini/components/SearchOrdini";
import Footer from "../../common/Footer/Footer";

function PasswordDimenticata() {
  return (
    <div>
      <div >
        <Header />
        <SearchOrdini />
        <div>
          <div className="flex justify-center mt-10">
            <div className="flex space-x-2 items-center">
              <p className="">
                Inserisci qui l'email con cui sei registrato e te ne invieremo
                una nuova
              </p>
              <input
                type="email"
                className="text-sm placeholder-gray-500 px-4 rounded-2xl border border-gray-400 py-2 focus:outline-none focus:border-[#f58220]"
                placeholder="Inserisci la tua email"
              />
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <button
              type="submit"
              className="flex mt-4 items-center justify-center px-8 focus:outline-none text-white text-sm sm:text-base bg-[#f58220] rounded-2xl py-2 transition duration-150 ease-in"
            >
              RIGENERA
            </button>
          </div>
        </div>
        <div className="fixed bottom-0 w-full">
          <Footer />
        </div>
       
      </div>
    </div>
  );
}

export default PasswordDimenticata;
