import React, { useState } from "react";
import Header from "../common/Header/Header";
import SearchOrdini from "../ordini/components/SearchOrdini";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  return (
    <div>
      <Header />
      <SearchOrdini />
      <div className="container mx-auto mt-4">
        <div className="flex flex-col relative w-full border border-[#f58220] rounded-sm">
          <div className="flex">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Registrati
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Perchè registrarsi? Un breve Tour
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Contattaci
            </button>
          </div>

          <div className="content-tabs h-auto">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <RegisterForm />
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              ffff
            </div>
            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              ffff
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
