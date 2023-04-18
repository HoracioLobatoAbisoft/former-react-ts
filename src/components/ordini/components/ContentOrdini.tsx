import React, { useState } from "react";
import imgShopping from "../../../assets/img/shopping.svg";
import imgArrow from "../../../assets/img/arrowdown.svg"
import TableOrdini from "./TableOrdini";
import LegendOrdini from "./LegendOrdini";
import SideBarPersonalArea from "../../common/SideBarPersonalArea/SideBarPersonalArea";

const ContentOrdini = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: any) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="flex">
        <SideBarPersonalArea />

        <div className="p-4 overflow-hidden w-full">
        <div className="flex items-center mb-4">
          <img className="h-8 w-8 mr-4" src={imgShopping} alt="" />
          <h2 className="text-[#f58220] font-semibold">le tue consegne</h2>
        </div>
        
          <div className="flex flex-col relative w-full border border-[#f58220] rounded-sm">
            <div className="flex">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Legenda stato consegne
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Legenda stato consegne
              </button>
              
            </div>

            <div className="content-tabs h-auto">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <h2 className="text-lg mb-2">Da qui puoi visualizzare lo stato dei tuoi Ordini. Clicca sul <img className="h-5 w-5 inline-block" src={imgArrow} alt="" /> che vedi accanto a ogni Ordine per visualizzare il dettaglio dell' ordine.</h2>
                <div className=" overflow-hidden">
                  <TableOrdini/>
                </div>
                
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <LegendOrdini />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentOrdini;
