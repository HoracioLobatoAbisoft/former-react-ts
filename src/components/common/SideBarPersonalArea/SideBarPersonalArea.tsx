import React from 'react'
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

const SideBarPersonalArea = () => {
  return (
    <aside
          id="default-sidebar"
          className=" z-40 w-72 min-w-72"
          aria-label="Sidebar"
        >
          <div className="h-full px-3  w-72 min-w-72 py-4 overflow-y-auto bg-gray-100">
            <ul className="space-y-2 pl-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <span className="">Profilo</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <img className="h-5 w-5" src={imgUser} alt="" />
                  <span className="ml-3 hover:underline">Il tuo Profilo</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <img className="h-5 w-5" src={imgPassword} alt="" />
                  <span className="ml-3 hover:underline">Cambio Password</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <img className="h-5 w-5" src={imgUserEdit} alt="" />
                  <span className="ml-3 hover:underline">
                    Aggiorna Dati Fiscali
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <img className="h-5 w-5" src={imgMap} alt="" />
                  <span className="ml-3 hover:underline">
                    Indirizzi e Corriere
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center mt-6 text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <span className="">Ordini</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <img className="h-5 w-5" src={imgShopping} alt="" />
                  <span className="ml-3 hover:underline">I tuoi Ordini</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <img className="h-5 w-5" src={imgVisualize} alt="" />
                  <span className="ml-3 hover:underline">I tuoi Lavori</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <img className="h-5 w-5" src={imgCoupon} alt="" />
                  <span className="ml-3 hover:underline">
                    I tuoi Coupon di Sconto
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <img className="h-5 w-5" src={imgOfert} alt="" />
                  <span className="ml-3 hover:underline">
                    Offerte e Promozioni
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <img className="h-5 w-5" src={imgPdf} alt="" />
                  <span className="ml-3 hover:underline">Le tue Fatture</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center mt-6 text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <span className="">Listino PDF</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <img className="h-5 w-5" src={imgPdf} alt="" />
                  <span className="ml-3 hover:underline">
                    Crea il tuo listino
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center mt-6 text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <span className="">Recensioni</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <img className="h-5 w-5" src={imgStar} alt="" />
                  <span className="ml-3 hover:underline">
                    {" "}
                    Le tue Recensioni
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center mt-6 text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <span className="">AIUTO</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <span className="ml-3 hover:underline">Contattaci</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <span className="ml-3 hover:underline">
                    Le nostre lavorazioni
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <span className="ml-3 hover:underline">
                    Glossario Tipografico
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center  text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <span className="ml-3 hover:underline">
                    Come creare file perfetti
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
  )
}

export default SideBarPersonalArea