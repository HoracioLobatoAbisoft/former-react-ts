import React from "react";
import imgUserEdit from "../../../assets/img/user-edit.svg";
import imgCardUser from "../../../assets/img/carduser.svg";
import imgEmail from "../../../assets/img/email.svg";
import imgPowerButton from "../../../assets/img/power-button.svg";
import SideBarPersonalArea from "../../common/SideBarPersonalArea/SideBarPersonalArea";

const ProfileContent = () => {
  return (
    <div className="flex ">
      <SideBarPersonalArea />

      <div className="p-4  w-full mt-10 ml-10">
        <div className="flex items-center mb-4">
          <img className="h-8 w-8 mr-4" src={imgUserEdit} alt="" />
          <h2 className="text-[#f58220] font-semibold">
            AGGIORNA DATI FISCALI
          </h2>
        </div>

        <div>
          <div className="flex space-x-4">
            <h2 className="w-44">La tua ID di accesso: </h2>
            <p className="font-semibold">2687</p>
          </div>
          <div className="flex space-x-4 mt-2">
            <h2 className="w-44">La tua Email di accesso: </h2>
            <p className="font-semibold">info@dimmagine.com</p>
          </div>
        </div>

        <div className="flex items-center mt-10">
          <img className="h-8 w-8 mr-4" src={imgCardUser} alt="" />
          <h2 className="text-[#f58220] font-semibold">I TUOI DATI FISCALI</h2>
        </div>
        <div className="flex space-x-4 mt-2">
          <h2 className="w-44">Ragione Sociale: </h2>
          <p className="font-semibold">Dimmagine s.r.l.</p>
        </div>
        <div className="flex space-x-4 mt-2">
          <h2 className="w-44">Nominativo: </h2>
          <p className="font-semibold">Donatella Bittoni</p>
        </div>
        <div className="flex space-x-4 mt-2">
          <h2 className="w-44">P.IVA: </h2>
          <p className="font-semibold">11359621007</p>
        </div>
        <div className="flex space-x-4 mt-2">
          <h2 className="w-44">Codice Fiscale: </h2>
          <p className="font-semibold"></p>
        </div>
        <div className="flex space-x-4 mt-2">
          <h2 className="w-44">PEC: </h2>
          <p className="font-semibold"></p>
        </div>
        <div className="flex space-x-4 mt-2">
          <h2 className="w-44">Codice SDI: </h2>
          <p className="font-semibold">M5UXCR1</p>
        </div>
        <div className="flex space-x-4 mt-2">
          <h2 className="w-44">Indirizzo: </h2>
          <p className="font-semibold">Via Veturia,44, Roma (RM) - 00181</p>
        </div>
        <div className="flex space-x-4 mt-2">
          <h2 className="w-44">Recapiti: </h2>
          <p className="font-semibold">tel. 067216713 fax 3393442935 cel. 3345667575</p>
        </div>

        <div className="flex items-center mt-10">
          <img className="h-8 w-8 mr-4" src={imgEmail} alt="" />
          <h2 className="text-[#f58220] font-semibold">NEWSLETTER E OFFERTE</h2>
        </div>
        <div>
          <p>Se non vuoi più ricevere la nostra Newsletter e le nostre Offerte <span className="text-blue-500 hover:underline cursor-pointer"> clicca qui</span></p>
          <p><span className="text-blue-500 hover:underline cursor-pointer">Cliccando qui</span> puoi leggere la nostra informativa sulla privacy</p>
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex space-x-2 bg-[#d6e03d] uppercase px-10 py-2 rounded-sm cursor-pointer">
            <img className="h-5 w-5" src={imgPowerButton} alt="" />
            <button>Esci</button>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default ProfileContent;
