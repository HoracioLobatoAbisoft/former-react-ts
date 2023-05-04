import React, { useState } from "react";
import imgUser from "../../../assets/img/user.svg";
import imgPassword from "../../../assets/img/password.svg";
import imgUserEdit from "../../../assets/img/user-edit.svg";
import imgMap from "../../../assets/img/map.svg";
import imgShopping from "../../../assets/img/shopping.svg";
import imgVisualize from "../../../assets/img/visualize.svg";
import imgOfert from "../../../assets/img/offer.svg";
import imgPdf from "../../../assets/img/pdf.svg";
import imgStar from "../../../assets/img/star.svg";
import imgCoupon from "../../../assets/img/coupon.svg";
import imgControl from "../../../assets/img/control.png";
import imgContact from "../../../assets/img/icons8-nuevo-contacto-60.png"
import imgWorks from "../../../assets/img/icons8-trabajo-permanente-60.png"
import imgGlossary from "../../../assets/img/icons8-glossary-60.png"
import imgGuide from "../../../assets/img/icons8-matrícula-60.png"



import { Link } from "react-router-dom";

const SideBarPersonalArea = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Profilo" },
    { title: "Il tuo profilo", src: imgUser, url:"/Profilo" },
    { title: "Cambio password", src: imgPassword, url:"/Password" },
    { title: "Aggiorna dati fiscali", src: imgUserEdit, url:"/DatiFiscali" },
    { title: "Indirizzi e corriere", src: imgMap, url:"/indirizziCorriere" },
    { title: "Le tue consegne" },
    { title: "Le tue consegne", src: imgShopping },
    { title: "I tuoi lavori", src: imgVisualize },
    { title: " I tuoi coupon di sconto", src: imgCoupon, url:"/Discount" },
    { title: " Offerte e promozioni", src: imgOfert },
    { title: "Le tue fatture", src: imgPdf },
    { title: "Listino PDF" },
    { title: "Crea il tuo listino", src: imgPdf },
    { title: "Recensioni" },
    { title: "Le tue recensioni", src: imgStar },
    { title: "Contattaci", src: imgContact },
    { title: "Le nostre lavorazioni", src: imgWorks },
    { title: "Glossario tipografico", src: imgGlossary },
    { title: "Come creare file perfetti", src: imgGuide },
  ];

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  return (
    <div className="relative">
      <div
        className={` ${
          open ? "w-64" : "w-24 "
        } bg-dark-purple h-screen pl-4 pr-2 pt-8 relative duration-300`}
      >
        <img
          src={imgControl}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          {/* <img
              src="./src/assets/logo.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            /> */}
          <h1
            className={` origin-left uppercase font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Area Personale
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link
              to={Menu.url? Menu.url: ""}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-900 text-sm items-center gap-x-4`}
            >
              {Menu.src && <img className="h-8 w-8" src={Menu.src} />}

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarPersonalArea;
