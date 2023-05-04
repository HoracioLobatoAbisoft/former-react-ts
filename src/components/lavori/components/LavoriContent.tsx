import React, { useState,useContext} from "react";
import imgShopping from "../../../assets/img/shopping.svg";
import imgArrow from "../../../assets/img/arrowdown.svg";
import SideBarPersonalArea from "../../common/SideBarPersonalArea/SideBarPersonalArea";
import TablaLavori from "./TablaLavori";
import LegendsLavori from "./LegendsLavori";
import UserContext from "../../../context/UserContext";
const LavoriContent = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: any) => {
    setToggleState(index);
  };
  const userData = useContext(UserContext);
  console.log(userData)
  return (
    <div className="flex overflow-x-scroll">
      <SideBarPersonalArea />

      <div className="p-4 w-full overflow-x-scroll">
        <div className="flex items-center mb-4">
          <img className="h-8 w-8 mr-4" src={imgShopping} alt="" />
          <h2 className="text-[#f58220] font-semibold">I TUOI LAVORI</h2>
        </div>

        <div className="flex flex-col relative w-full border border-[#f58220] rounded-sm">
          <div className="flex">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Tutti i tuoi Lavori
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Legenda stato Lavori
            </button>
          </div>

          <div className="content-tabs h-auto">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <h2 className="text-lg mb-2">
                {" "}
                Da qui puoi consultare lo stato dei tuoi lavori ed essere sempre
                informato sulla fase di lavorazione. Lo stato dei lavori viene
                aggiornato all' incirca ogni 15 minuti.
              </h2>
              <h2 className="text-lg mb-2">
                Clicca sul{" "}
                <img className="h-5 w-5 inline-block" src={imgArrow} alt="" />{" "}
                che vedi accanto a ogni Lavoro per visualizzare il dettaglio e
                le operazioni che puoi effettuare.
              </h2>
              
              <TablaLavori />
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <LegendsLavori />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LavoriContent;
